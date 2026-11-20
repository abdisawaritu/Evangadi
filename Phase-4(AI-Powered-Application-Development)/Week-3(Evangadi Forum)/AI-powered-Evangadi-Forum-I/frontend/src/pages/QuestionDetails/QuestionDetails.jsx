import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Bold,
  Check,
  Code2,
  Copy,
  Italic,
  Link2,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isAuthoredByUser } from "../../lib/utils";
import { answerService } from "../../services/answer/answer.service.js";
import {
  ANSWER_FIT_TIMEOUT_MS,
  questionService,
} from "../../services/question/question.service.js";
import styles from "./QuestionDetails.module.css";

const ANSWER_MIN_LENGTH = 20;

function getErrorMessage(error, fallback) {
  return (
    error?.response?.data?.msg ||
    error?.response?.data?.message ||
    error?.message ||
    fallback
  );
}

function getAuthorName(author) {
  return [author?.firstName, author?.lastName].filter(Boolean).join(" ");
}

function getInitials(author) {
  return [author?.firstName, author?.lastName]
    .filter(Boolean)
    .map((name) => name.trim().charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(date) {
  if (!date) return "";
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime())
    ? ""
    : parsedDate.toLocaleDateString();
}

function getAnswerFitMessage(error) {
  if (
    error?.code === "ECONNABORTED" ||
    error?.code === "ETIMEDOUT"
  ) {
    const timeoutSeconds = Math.round(ANSWER_FIT_TIMEOUT_MS / 1000);
    return `AI Answer Fit took longer than ${timeoutSeconds} seconds and timed out. Your answer draft is unchanged. Please retry, or submit it without AI evaluation.`;
  }
  if (!error?.response) {
    return "Could not reach the server for AI Answer Fit. Check your connection and try again. Your answer draft is unchanged, and you can still submit it.";
  }
  if (error?.response?.status === 503) {
    return `AI Answer Fit is unavailable right now. ${getErrorMessage(
      error,
      "Please try again later.",
    )} Your answer draft is unchanged, and you can still submit it.`;
  }
  if (error?.response?.status === 429) {
    return "AI Answer Fit is rate limited or over quota right now. Please try again later. Your answer draft is unchanged, and you can still submit it.";
  }
  return `${getErrorMessage(error, "Unable to evaluate this draft.")} Your answer draft is unchanged, and you can still submit it.`;
}

export default function QuestionDetails() {
  const { questionHash } = useParams();
  return (
    <QuestionDetailsContent
      key={questionHash}
      questionHash={questionHash}
    />
  );
}

function QuestionDetailsContent({ questionHash }) {
  const { user } = useAuth();
  const [questionState, setQuestionState] = useState({
    hash: questionHash,
    status: "loading",
    question: null,
    answers: [],
  });
  const [similarState, setSimilarState] = useState({
    hash: questionHash,
    status: "loading",
    questions: [],
  });
  const [answerDraft, setAnswerDraft] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [answerSuccess, setAnswerSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answerFitState, setAnswerFitState] = useState(null);
  const [isCopying, setIsCopying] = useState(false);
  const [copyError, setCopyError] = useState("");
  const submitLockRef = useRef(false);
  const answerFitLockRef = useRef(false);
  const answerFitRequestRef = useRef(0);
  const answerInputRef = useRef(null);

  useEffect(() => {
    let isCurrentRequest = true;

    const fetchQuestion = async () => {
      try {
        const response = await questionService.getQuestionByHash(questionHash);
        if (!response?.question || !Array.isArray(response.answers)) {
          throw new Error("The server returned an unexpected question response.");
        }
        if (isCurrentRequest) {
          setQuestionState({
            hash: questionHash,
            status: "success",
            question: response.question,
            answers: response.answers,
          });
        }
      } catch (error) {
        if (isCurrentRequest) {
          setQuestionState({
            hash: questionHash,
            status: "error",
            message: getErrorMessage(error, "Unable to load question details."),
          });
        }
      }
    };

    const fetchSimilarQuestions = async () => {
      try {
        const response =
          await questionService.getSimilarQuestions(questionHash);
        if (!Array.isArray(response?.data)) {
          throw new Error("The server returned an unexpected similar-questions response.");
        }
        if (isCurrentRequest) {
          setSimilarState({
            hash: questionHash,
            status: "success",
            questions: response.data,
          });
        }
      } catch (error) {
        if (isCurrentRequest) {
          setSimilarState({
            hash: questionHash,
            status: "error",
            message: getErrorMessage(error, "Unable to load related questions."),
            questions: [],
          });
        }
      }
    };

    void fetchQuestion();
    void fetchSimilarQuestions();

    return () => {
      isCurrentRequest = false;
    };
  }, [questionHash]);

  function updateAnswerDraft(value) {
    setAnswerDraft(value);
    setAnswerError("");
    setAnswerSuccess("");
    answerFitRequestRef.current += 1;
    setAnswerFitState(null);
  }

  function insertMarkdown(prefix, suffix = prefix) {
    const editor = answerInputRef.current;
    if (!editor || isSubmitting) return;

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = answerDraft.slice(start, end);
    const insertion = selectedText
      ? `${prefix}${selectedText}${suffix}`
      : `${prefix}${suffix}`;
    const nextDraft =
      answerDraft.slice(0, start) + insertion + answerDraft.slice(end);

    updateAnswerDraft(nextDraft);
    requestAnimationFrame(() => {
      editor.focus();
      const selectionStart = start + prefix.length;
      const selectionEnd = selectedText
        ? selectionStart + selectedText.length
        : selectionStart;
      editor.setSelectionRange(selectionStart, selectionEnd);
    });
  }

  async function handleAnswerFit() {
    if (answerFitLockRef.current) return;

    const answerText = answerDraft.trim();
    if (answerText.length < ANSWER_MIN_LENGTH) {
      setAnswerError(
        `Enter at least ${ANSWER_MIN_LENGTH} characters before checking answer fit.`,
      );
      answerInputRef.current?.focus();
      return;
    }

    const requestId = answerFitRequestRef.current + 1;
    answerFitLockRef.current = true;
    answerFitRequestRef.current = requestId;
    setAnswerError("");
    setAnswerFitState({ status: "loading" });

    try {
      const response = await questionService.assessAnswerFit(
        questionHash,
        answerText,
      );
      if (answerFitRequestRef.current !== requestId) return;

      const evaluation = response?.data;
      if (
        !["strong", "partial", "weak"].includes(evaluation?.level) ||
        typeof evaluation.note !== "string" ||
        evaluation.note.trim().length === 0
      ) {
        throw new Error(
          "The AI returned an unexpected evaluation. Your draft is unchanged.",
        );
      }

      setAnswerFitState({
        status: "success",
        evaluation: {
          level: evaluation.level,
          note: evaluation.note.trim(),
        },
      });
    } catch (error) {
      if (answerFitRequestRef.current !== requestId) return;
      setAnswerFitState({
        status: "error",
        message: getAnswerFitMessage(error),
      });
    } finally {
      answerFitLockRef.current = false;
    }
  }

  async function handleAnswerSubmit(event) {
    event.preventDefault();
    const content = answerDraft.trim();

    if (!content) {
      setAnswerError("Answer content is required.");
      answerInputRef.current?.focus();
      return;
    }
    if (content.length < ANSWER_MIN_LENGTH) {
      setAnswerError(
        `Answer content must be at least ${ANSWER_MIN_LENGTH} characters.`,
      );
      answerInputRef.current?.focus();
      return;
    }
    if (submitLockRef.current) return;

    const question = questionState.question;
    if (!question || isAuthoredByUser({ author: question.author }, user)) {
      setAnswerError("You cannot answer your own question.");
      return;
    }

    submitLockRef.current = true;
    answerFitRequestRef.current += 1;
    setAnswerFitState(null);
    setAnswerError("");
    setAnswerSuccess("");
    setIsSubmitting(true);

    try {
      const response = await answerService.createAnswer({
        questionId: question.id,
        content,
      });
      const createdAnswer = response?.data;
      if (!createdAnswer || createdAnswer.content !== content) {
        throw new Error("The server returned an unexpected answer response.");
      }

      setQuestionState((currentState) => {
        if (currentState.hash !== questionHash) return currentState;
        const answerAlreadyPresent = currentState.answers.some(
          (answer) => String(answer.id) === String(createdAnswer.id),
        );
        const answers = answerAlreadyPresent
          ? currentState.answers
          : [createdAnswer, ...currentState.answers];
        const currentAnswerCount = Number(
          currentState.question.answerCount ?? currentState.answers.length,
        );

        return {
          ...currentState,
          question: {
            ...currentState.question,
            answerCount: currentAnswerCount + (answerAlreadyPresent ? 0 : 1),
          },
          answers,
        };
      });
      setAnswerDraft("");
      setAnswerSuccess("Your answer was posted successfully.");

      try {
        const refreshedResponse =
          await questionService.getQuestionByHash(questionHash);
        if (
          refreshedResponse?.question &&
          Array.isArray(refreshedResponse.answers)
        ) {
          setQuestionState({
            hash: questionHash,
            status: "success",
            question: refreshedResponse.question,
            answers: refreshedResponse.answers,
          });
        }
      } catch {
        setAnswerSuccess(
          "Your answer was posted successfully. The displayed answer list may need a refresh.",
        );
      }
    } catch (error) {
      setAnswerError(
        getErrorMessage(error, "Failed to post answer. Please try again."),
      );
    } finally {
      submitLockRef.current = false;
      setIsSubmitting(false);
    }
  }

  async function handleCopyLink() {
    setCopyError("");
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopying(true);
      window.setTimeout(() => setIsCopying(false), 1800);
    } catch {
      setCopyError("Unable to copy the link in this browser.");
    }
  }

  const currentQuestionState =
    questionState.hash === questionHash ? questionState : null;
  const currentSimilarState =
    similarState.hash === questionHash ? similarState : null;

  if (!currentQuestionState || currentQuestionState.status === "loading") {
    return (
      <div className={styles.questionDetails__state} role="status">
        Loading question details...
      </div>
    );
  }

  if (currentQuestionState.status === "error") {
    return (
      <div className={styles.questionDetails__state}>
        <p className={styles.questionDetails__loadError} role="alert">
          Failed to load question details.
        </p>
        <p className={styles.questionDetails__loadErrorDetail}>
          {currentQuestionState.message}
        </p>
        <Link
          className={styles.questionDetails__returnButton}
          to="/dashboard"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const { question, answers } = currentQuestionState;
  const isOwnQuestion = isAuthoredByUser({ author: question.author }, user);
  const replyCount = Number(question.answerCount ?? answers.length);

  return (
    <div className={styles.questionDetails}>
      <Link className={styles.questionDetails__backLink} to="/dashboard">
        <ArrowLeft size={17} aria-hidden />
        Back to feed
      </Link>

      <div className={styles.questionDetails__topGrid}>
        <article className={styles.questionDetails__questionCard}>
          <header className={styles.questionDetails__author}>
            <span className={styles.questionDetails__avatar} aria-hidden>
              {getInitials(question.author) || "?"}
            </span>
            <span className={styles.questionDetails__authorInfo}>
              <span className={styles.questionDetails__authorName}>
                {getAuthorName(question.author) || "Community member"}
              </span>
              <span className={styles.questionDetails__date}>
                Posted {formatDate(question.createdAt)}
              </span>
            </span>
          </header>

          <h1 className={styles.questionDetails__title}>{question.title}</h1>
          <div className={styles.questionDetails__markdown}>
            <ReactMarkdown>{question.content || ""}</ReactMarkdown>
          </div>

          <footer className={styles.questionDetails__questionActions}>
            <button
              className={styles.questionDetails__secondaryButton}
              onClick={handleCopyLink}
              type="button"
            >
              {isCopying ? (
                <Check size={15} aria-hidden />
              ) : (
                <Copy size={15} aria-hidden />
              )}
              {isCopying ? "Copied" : "Share"}
            </button>
            <a className={styles.questionDetails__secondaryButton} href="#answers">
              <MessageSquare size={15} aria-hidden />
              {replyCount} {replyCount === 1 ? "Answer" : "Answers"}
            </a>
            {copyError && (
              <span className={styles.questionDetails__copyError} role="status">
                {copyError}
              </span>
            )}
          </footer>
        </article>

        <aside
          className={styles.questionDetails__related}
          aria-labelledby="related-questions-title"
        >
          <h2
            className={styles.questionDetails__relatedTitle}
            id="related-questions-title"
          >
            Related Questions
          </h2>
          {!currentSimilarState ||
          currentSimilarState.status === "loading" ? (
            <p className={styles.questionDetails__relatedState} role="status">
              Finding similar questions...
            </p>
          ) : currentSimilarState.status === "error" ? (
            <p
              className={styles.questionDetails__relatedError}
              role="alert"
              title={currentSimilarState.message}
            >
              Related questions are temporarily unavailable.
            </p>
          ) : currentSimilarState.questions.length === 0 ? (
            <p className={styles.questionDetails__relatedState}>
              No similar questions found.
            </p>
          ) : (
            <div className={styles.questionDetails__relatedList}>
              {currentSimilarState.questions.map((similarQuestion) => (
                <Link
                  className={styles.questionDetails__relatedCard}
                  key={similarQuestion.id || similarQuestion.questionHash}
                  to={`/question/${encodeURIComponent(
                    similarQuestion.questionHash,
                  )}`}
                >
                  <span className={styles.questionDetails__relatedQuestionTitle}>
                    {similarQuestion.title}
                  </span>
                  <span className={styles.questionDetails__relatedMeta}>
                    {Number(similarQuestion.answerCount || 0)} answers
                    {similarQuestion.createdAt
                      ? ` · ${formatDate(similarQuestion.createdAt)}`
                      : ""}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>

      <section
        className={styles.questionDetails__answers}
        id="answers"
        aria-labelledby="answers-title"
      >
        <h2 className={styles.questionDetails__sectionTitle} id="answers-title">
          Community Answers ({replyCount})
        </h2>
        {answers.length === 0 ? (
          <div className={styles.questionDetails__emptyAnswers}>
            <MessageSquare size={30} aria-hidden />
            <p className={styles.questionDetails__emptyTitle}>
              Be the first to help!
            </p>
            <p className={styles.questionDetails__emptyText}>
              This question is waiting for an expert like you. Share your
              knowledge and earn reputation points.
            </p>
          </div>
        ) : (
          <div className={styles.questionDetails__answerList}>
            {answers.map((answer) => (
              <article
                className={styles.questionDetails__answerCard}
                key={answer.id}
              >
                <header className={styles.questionDetails__answerAuthor}>
                  <span
                    className={`${styles.questionDetails__avatar} ${styles["questionDetails__avatar--answer"]}`}
                    aria-hidden
                  >
                    {getInitials(answer.author) || "?"}
                  </span>
                  <span className={styles.questionDetails__authorInfo}>
                    <span className={styles.questionDetails__authorName}>
                      {getAuthorName(answer.author) || "Community member"}
                    </span>
                    <span className={styles.questionDetails__date}>
                      {formatDate(answer.createdAt)}
                    </span>
                  </span>
                </header>
                <div className={styles.questionDetails__answerMarkdown}>
                  <ReactMarkdown>{answer.content || ""}</ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section
        className={styles.questionDetails__answerFormCard}
        aria-labelledby="answer-form-title"
      >
        <h2
          className={styles.questionDetails__sectionTitle}
          id="answer-form-title"
        >
          {isOwnQuestion ? "Your question" : "Contribute an answer"}
        </h2>

        {isOwnQuestion ? (
          <p className={styles.questionDetails__ownQuestionNotice} role="status">
            You cannot answer your own question. You can still review the
            discussion and related questions.
          </p>
        ) : (
          <>
            {answerSuccess && (
              <p
                className={styles.questionDetails__successMessage}
                role="status"
              >
                {answerSuccess}
              </p>
            )}
            {answerError && (
              <p className={styles.questionDetails__formError} role="alert">
                {answerError}
              </p>
            )}

            <form
              className={styles.questionDetails__answerForm}
              onSubmit={handleAnswerSubmit}
              noValidate
            >
              <div className={styles.questionDetails__editor}>
                <div className={styles.questionDetails__toolbar}>
                  <div
                    className={styles.questionDetails__toolbarActions}
                    role="group"
                    aria-label="Answer Markdown formatting"
                  >
                    <button
                      aria-label="Bold selected text"
                      className={styles.questionDetails__toolbarButton}
                      disabled={isSubmitting}
                      onClick={() => insertMarkdown("**")}
                      title="Bold"
                      type="button"
                    >
                      <Bold size={16} aria-hidden />
                    </button>
                    <button
                      aria-label="Italicize selected text"
                      className={styles.questionDetails__toolbarButton}
                      disabled={isSubmitting}
                      onClick={() => insertMarkdown("*")}
                      title="Italic"
                      type="button"
                    >
                      <Italic size={16} aria-hidden />
                    </button>
                    <button
                      aria-label="Format selected text as code"
                      className={styles.questionDetails__toolbarButton}
                      disabled={isSubmitting}
                      onClick={() => insertMarkdown("`")}
                      title="Code"
                      type="button"
                    >
                      <Code2 size={16} aria-hidden />
                    </button>
                    <button
                      aria-label="Insert a Markdown link"
                      className={styles.questionDetails__toolbarButton}
                      disabled={isSubmitting}
                      onClick={() => insertMarkdown("[", "](url)")}
                      title="Link"
                      type="button"
                    >
                      <Link2 size={16} aria-hidden />
                    </button>
                  </div>
                  <span
                    className={styles.questionDetails__characterCount}
                    aria-live="polite"
                  >
                    {answerDraft.length} characters
                  </span>
                </div>
                <textarea
                  aria-label="Your answer"
                  className={styles.questionDetails__answerTextarea}
                  disabled={isSubmitting}
                  onChange={(event) => updateAnswerDraft(event.target.value)}
                  placeholder="Type your answer here... You can use Markdown to format your code!"
                  ref={answerInputRef}
                  rows={9}
                  value={answerDraft}
                />
              </div>

              {answerFitState?.status === "loading" && (
                <p className={styles.questionDetails__fitLoading} role="status">
                  Checking whether your answer addresses this question...
                </p>
              )}
              {answerFitState?.status === "error" && (
                <p className={styles.questionDetails__fitError} role="alert">
                  {answerFitState.message}
                </p>
              )}
              {answerFitState?.status === "success" && (
                <div
                  className={styles.questionDetails__fitResult}
                  role="status"
                  aria-live="polite"
                >
                  <strong
                    className={`${styles.questionDetails__fitLevel} ${
                      styles[`questionDetails__fitLevel--${answerFitState.evaluation.level}`]
                    }`}
                  >
                    {answerFitState.evaluation.level} fit
                  </strong>
                  <span>{answerFitState.evaluation.note}</span>
                </div>
              )}

              <div className={styles.questionDetails__answerFormActions}>
                <div className={styles.questionDetails__fitActions}>
                  <button
                    className={styles.questionDetails__fitButton}
                    disabled={isSubmitting || answerFitState?.status === "loading"}
                    onClick={handleAnswerFit}
                    type="button"
                  >
                    <Sparkles size={16} aria-hidden />
                    {answerFitState?.status === "loading"
                      ? "Checking..."
                      : "Check draft fit"}
                  </button>
                  <p className={styles.questionDetails__fitHint}>
                    Relevance only, not grading. You need at least 20
                    characters.
                  </p>
                </div>
                <button
                  className={styles.questionDetails__submitAnswer}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    "Posting..."
                  ) : (
                    <>
                      Post Your Answer
                      <Send size={15} aria-hidden />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
