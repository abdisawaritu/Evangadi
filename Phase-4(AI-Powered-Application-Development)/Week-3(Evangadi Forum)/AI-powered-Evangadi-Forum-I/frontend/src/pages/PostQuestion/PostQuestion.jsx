import { useRef, useState } from "react";
import {
  Bold,
  CheckCircle2,
  Code2,
  Italic,
  Link2,
  Send,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { questionService } from "../../services/question/question.service.js";
import styles from "./PostQuestion.module.css";

const EMPTY_DRAFT = { title: "", content: "" };

function getDraftErrors(draft) {
  const errors = {};
  const title = draft.title.trim();
  const content = draft.content.trim();

  if (!title) {
    errors.title = "Question title is required.";
  } else if (title.length < 5) {
    errors.title = "Question title must be at least 5 characters.";
  } else if (title.length > 255) {
    errors.title = "Question title must be at most 255 characters.";
  }

  if (!content) {
    errors.content = "Question content is required.";
  } else if (content.length < 10) {
    errors.content = "Question content must be at least 10 characters.";
  }

  return errors;
}

function getErrorMessage(error, fallback) {
  return (
    error?.response?.data?.msg ||
    error?.response?.data?.message ||
    error?.message ||
    fallback
  );
}

export default function PostQuestion() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState(EMPTY_DRAFT);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coachState, setCoachState] = useState(null);
  const [createdQuestion, setCreatedQuestion] = useState(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const submitLockRef = useRef(false);
  const coachRequestIdRef = useRef(0);

  const draftErrors = showValidationErrors ? getDraftErrors(draft) : {};

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
    coachRequestIdRef.current += 1;
    setCoachState(null);
    setSubmitError("");
  }

  function focusFirstInvalidField(errors) {
    if (errors.title) {
      titleRef.current?.focus();
    } else if (errors.content) {
      contentRef.current?.focus();
    }
  }

  function insertMarkdown(prefix, suffix = prefix) {
    const editor = contentRef.current;
    if (!editor || isSubmitting) return;

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = draft.content.slice(start, end);
    const insertion = selectedText
      ? `${prefix}${selectedText}${suffix}`
      : `${prefix}${suffix}`;
    const nextContent =
      draft.content.slice(0, start) + insertion + draft.content.slice(end);

    updateDraft("content", nextContent);
    requestAnimationFrame(() => {
      editor.focus();
      const selectionStart = start + prefix.length;
      const selectionEnd = selectedText
        ? selectionStart + selectedText.length
        : selectionStart;
      editor.setSelectionRange(selectionStart, selectionEnd);
    });
  }

  async function handleDraftCoach() {
    setShowValidationErrors(true);
    const errors = getDraftErrors(draft);
    if (Object.keys(errors).length > 0) {
      focusFirstInvalidField(errors);
      return;
    }

    const requestId = coachRequestIdRef.current + 1;
    coachRequestIdRef.current = requestId;
    setCoachState({ status: "loading" });

    try {
      const response = await questionService.generateQuestionDraftCoach({
        title: draft.title.trim(),
        content: draft.content.trim(),
      });
      if (coachRequestIdRef.current !== requestId) return;

      const tips = response?.data?.tips;
      if (
        !Array.isArray(tips) ||
        tips.length < 3 ||
        tips.length > 5 ||
        !tips.every(
          (tip) => typeof tip === "string" && tip.trim().length > 0,
        )
      ) {
        throw new Error(
          "Draft Coach returned an unexpected response. No changes were made to your draft.",
        );
      }

      setCoachState({
        status: "success",
        tips: tips.map((tip) => tip.trim()),
        appliedTips: [],
      });
    } catch (error) {
      if (coachRequestIdRef.current !== requestId) return;

      const serverMessage = getErrorMessage(
        error,
        "Please try again later.",
      );
      const message =
        error?.response?.status === 503
          ? `AI Draft Coach is unavailable right now. ${serverMessage} Your draft is unchanged, and you can still post it.`
          : `${serverMessage} Your draft is unchanged.`;

      setCoachState({ status: "error", message });
    }
  }

  function toggleTipApplied(tipIndex) {
    setCoachState((currentState) => {
      if (currentState?.status !== "success") return currentState;

      const appliedTips = new Set(currentState.appliedTips);
      if (appliedTips.has(tipIndex)) {
        appliedTips.delete(tipIndex);
      } else {
        appliedTips.add(tipIndex);
      }

      return { ...currentState, appliedTips: [...appliedTips] };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setShowValidationErrors(true);
    const errors = getDraftErrors(draft);
    if (Object.keys(errors).length > 0) {
      focusFirstInvalidField(errors);
      return;
    }
    if (submitLockRef.current) return;

    submitLockRef.current = true;
    coachRequestIdRef.current += 1;
    setCoachState(null);
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await questionService.createQuestion({
        title: draft.title.trim(),
        content: draft.content.trim(),
      });
      const questionHash = response?.data?.questionHash;

      if (
        typeof questionHash !== "string" ||
        !/^[a-f0-9]{16}$/.test(questionHash)
      ) {
        setSubmitError(
          "The server did not return a valid question link. Check Your Topics before retrying to avoid creating a duplicate.",
        );
        return;
      }

      setCreatedQuestion({
        questionHash,
        title: response.data.title || draft.title.trim(),
      });
    } catch (error) {
      setSubmitError(
        getErrorMessage(error, "Failed to post question. Please try again."),
      );
    } finally {
      submitLockRef.current = false;
      setIsSubmitting(false);
    }
  }

  function handleAskAnother() {
    coachRequestIdRef.current += 1;
    setDraft(EMPTY_DRAFT);
    setShowValidationErrors(false);
    setSubmitError("");
    setCoachState(null);
    setCreatedQuestion(null);
  }

  if (createdQuestion) {
    const questionUrl = `/question/${encodeURIComponent(
      createdQuestion.questionHash,
    )}`;

    return (
      <div className={styles.postQuestion}>
        <section className={styles.postQuestion__intro}>
          <p className={styles.postQuestion__eyebrow}>Ask the cohort</p>
          <h1 className={styles.postQuestion__pageTitle}>
            Publish to the forum
          </h1>
          <p className={styles.postQuestion__introText}>
            Public threads help the whole cohort. Write as if a classmate will
            debug your issue tomorrow. They only know what you put on the page.
          </p>
        </section>

        <section
          className={styles.postQuestion__success}
          aria-labelledby="question-published-title"
        >
          <span className={styles.postQuestion__successIcon} aria-hidden>
            <CheckCircle2 size={34} />
          </span>
          <h2
            className={styles.postQuestion__successTitle}
            id="question-published-title"
          >
            Thread published
          </h2>
          <p className={styles.postQuestion__successText}>
            <strong>{createdQuestion.title}</strong> is posted and ready for
            keyword search and embedding-based similarity. You can open the
            thread or start another question.
          </p>
          <div className={styles.postQuestion__successActions}>
            <Link
              className={styles.postQuestion__dashboardLink}
              to="/dashboard"
            >
              Back to Dashboard
            </Link>
            <Link className={styles.postQuestion__viewQuestion} to={questionUrl}>
              View Question
            </Link>
            <button
              className={styles.postQuestion__askAnother}
              onClick={handleAskAnother}
              type="button"
            >
              Ask Another
            </button>
          </div>
        </section>
      </div>
    );
  }

  const coachButtonDisabled = isSubmitting || coachState?.status === "loading";

  return (
    <div className={styles.postQuestion}>
      <section className={styles.postQuestion__intro}>
        <p className={styles.postQuestion__eyebrow}>Ask the cohort</p>
        <h1 className={styles.postQuestion__pageTitle}>Publish to the forum</h1>
        <p className={styles.postQuestion__introText}>
          Public threads help the whole cohort. Write as if a classmate will
          debug your issue tomorrow. They only know what you put on the page.
        </p>
      </section>

      <section
        className={styles.postQuestion__guidance}
        aria-labelledby="question-writing-title"
      >
        <h2
          className={styles.postQuestion__guidanceTitle}
          id="question-writing-title"
        >
          Write questions people can answer in one pass
        </h2>
        <p className={styles.postQuestion__guidanceText}>
          Mentors volunteer their time. Give them runnable context, expected vs
          actual behavior, and a tight scope so they can reproduce the issue
          without guessing your setup.
        </p>
        <h3 className={styles.postQuestion__checklistTitle}>
          Checklist before you post
        </h3>
        <ul className={styles.postQuestion__checklist}>
          <li>
            <strong>Title as a headline</strong> that states the symptom and
            tech stack (e.g., “React state resets after navigation”).
          </li>
          <li>
            <strong>Repro steps</strong> numbered, with environment (OS,
            browser, Node version) when it matters.
          </li>
          <li>
            <strong>Minimal code</strong> in fenced markdown blocks; trim
            unrelated lines so readers scan faster.
          </li>
          <li>
            <strong>Exact errors</strong> copied verbatim, including stack trace
            snippets when debugging backend routes.
          </li>
        </ul>
        <h3 className={styles.postQuestion__checklistTitle}>
          Validation rules (enforced by the form)
        </h3>
        <ul className={styles.postQuestion__checklist}>
          <li>
            <strong>Title length:</strong> Must be between 5 and 255 characters.
          </li>
          <li>
            <strong>Body length:</strong> Must contain a minimum of 10
            characters detailing your problem.
          </li>
          <li>
            <strong>Single topic:</strong> Split unrelated bugs into separate
            threads so search and embeddings stay precise.
          </li>
        </ul>
      </section>

      <section className={styles.postQuestion__formCard}>
        {submitError && (
          <p className={styles.postQuestion__submitError} role="alert">
            {submitError}
          </p>
        )}

        <form
          className={styles.postQuestion__form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.postQuestion__field}>
            <label className={styles.postQuestion__label} htmlFor="question-title">
              Title
            </label>
            <p className={styles.postQuestion__fieldHelp} id="title-help">
              Be specific and imagine you&apos;re asking a question to another
              person.
            </p>
            <input
              aria-describedby={
                draftErrors.title
                  ? "title-help title-error"
                  : "title-help"
              }
              aria-invalid={Boolean(draftErrors.title)}
              className={`${styles.postQuestion__input} ${
                draftErrors.title ? styles["postQuestion__input--invalid"] : ""
              }`}
              disabled={isSubmitting}
              id="question-title"
              maxLength={255}
              onChange={(event) => updateDraft("title", event.target.value)}
              placeholder="e.g. How do I handle state management using Context API in React?"
              ref={titleRef}
              value={draft.title}
            />
            {draftErrors.title && (
              <p
                className={styles.postQuestion__fieldError}
                id="title-error"
                role="alert"
              >
                {draftErrors.title}
              </p>
            )}
          </div>

          <div className={styles.postQuestion__field}>
            <label
              className={styles.postQuestion__label}
              htmlFor="question-content"
            >
              What are the details of your problem?
            </label>
            <p className={styles.postQuestion__fieldHelp} id="content-help">
              Introduce the problem and expand on what you put in the title.
              Minimum 10 characters.
            </p>
            <div
              className={`${styles.postQuestion__editor} ${
                draftErrors.content
                  ? styles["postQuestion__editor--invalid"]
                  : ""
              }`}
            >
              <div className={styles.postQuestion__toolbar}>
                <div
                  className={styles.postQuestion__toolbarActions}
                  role="group"
                  aria-label="Markdown formatting"
                >
                  <button
                    aria-label="Bold selected text"
                    className={styles.postQuestion__toolbarButton}
                    disabled={isSubmitting}
                    onClick={() => insertMarkdown("**")}
                    title="Bold"
                    type="button"
                  >
                    <Bold size={16} aria-hidden />
                  </button>
                  <button
                    aria-label="Italicize selected text"
                    className={styles.postQuestion__toolbarButton}
                    disabled={isSubmitting}
                    onClick={() => insertMarkdown("*")}
                    title="Italic"
                    type="button"
                  >
                    <Italic size={16} aria-hidden />
                  </button>
                  <button
                    aria-label="Format selected text as code"
                    className={styles.postQuestion__toolbarButton}
                    disabled={isSubmitting}
                    onClick={() => insertMarkdown("`")}
                    title="Code"
                    type="button"
                  >
                    <Code2 size={16} aria-hidden />
                  </button>
                  <button
                    aria-label="Insert a Markdown link"
                    className={styles.postQuestion__toolbarButton}
                    disabled={isSubmitting}
                    onClick={() => insertMarkdown("[", "](url)")}
                    title="Link"
                    type="button"
                  >
                    <Link2 size={16} aria-hidden />
                  </button>
                </div>
                <span
                  className={styles.postQuestion__characterCount}
                  aria-live="polite"
                >
                  {draft.content.length} characters
                </span>
              </div>
              <textarea
                aria-describedby={
                  draftErrors.content
                    ? "content-help content-error"
                    : "content-help"
                }
                aria-invalid={Boolean(draftErrors.content)}
                className={styles.postQuestion__textarea}
                disabled={isSubmitting}
                id="question-content"
                onChange={(event) =>
                  updateDraft("content", event.target.value)
                }
                placeholder="Include all the information someone would need to answer your question... You can use Markdown to format your code!"
                ref={contentRef}
                rows={10}
                value={draft.content}
              />
            </div>
            {draftErrors.content && (
              <p
                className={styles.postQuestion__fieldError}
                id="content-error"
                role="alert"
              >
                {draftErrors.content}
              </p>
            )}
          </div>

          <div className={styles.postQuestion__coach}>
            <button
              className={styles.postQuestion__coachButton}
              disabled={coachButtonDisabled}
              onClick={handleDraftCoach}
              type="button"
            >
              <Sparkles size={16} aria-hidden />
              {coachState?.status === "loading"
                ? "Reviewing draft..."
                : "AI suggestions"}
            </button>
            <p className={styles.postQuestion__coachHint}>
              Suggestions only. Your draft stays yours to edit and post.
            </p>
          </div>

          {coachState?.status === "error" && (
            <p className={styles.postQuestion__coachError} role="alert">
              {coachState.message}
            </p>
          )}

          {coachState?.status === "success" && (
            <section
              className={styles.postQuestion__suggestions}
              aria-labelledby="draft-coach-title"
              aria-live="polite"
            >
              <h2
                className={styles.postQuestion__suggestionsTitle}
                id="draft-coach-title"
              >
                Draft Coach suggestions
              </h2>
              <p className={styles.postQuestion__suggestionsHelp}>
                Review each tip, edit your draft yourself, and mark the ones
                you choose to apply. Your draft was not changed automatically.
              </p>
              <ul className={styles.postQuestion__suggestionList}>
                {coachState.tips.map((tip, index) => {
                  const isApplied = coachState.appliedTips.includes(index);

                  return (
                    <li
                      className={styles.postQuestion__suggestion}
                      key={`${index}-${tip}`}
                    >
                      <span>{tip}</span>
                      <button
                        aria-pressed={isApplied}
                        className={`${styles.postQuestion__applyTip} ${
                          isApplied
                            ? styles["postQuestion__applyTip--applied"]
                            : ""
                        }`}
                        onClick={() => toggleTipApplied(index)}
                        type="button"
                      >
                        {isApplied ? "Applied" : "Mark applied"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <div className={styles.postQuestion__formActions}>
            <button
              className={styles.postQuestion__cancel}
              disabled={isSubmitting}
              onClick={() => navigate("/dashboard")}
              type="button"
            >
              Cancel
            </button>
            <button
              className={styles.postQuestion__submit}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                "Posting..."
              ) : (
                <>
                  Post Question
                  <Send size={16} aria-hidden />
                </>
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
