import { useEffect, useState } from "react";
import { MessageSquare, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { questionService } from "../../services/question/question.service.js";
import { isAuthoredByUser, timeAgo } from "../../lib/utils";
import pageStates from "../../styles/pageStates.module.css";
import styles from "./MyQuestions.module.css";

function getErrorMessage(error) {
  return (
    error?.response?.data?.msg ||
    error?.response?.data?.message ||
    error?.message ||
    "Unable to load your questions. Please try again."
  );
}

function getInitials(author) {
  return [author?.firstName, author?.lastName]
    .filter(Boolean)
    .map((name) => name.trim().charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getExcerpt(content) {
  return typeof content === "string" ? content.replace(/\s+/g, " ").trim() : "";
}

export default function MyQuestions() {
  const { user } = useAuth();
  const userKey = user?.id == null ? null : String(user.id);
  const [requestState, setRequestState] = useState(null);

  useEffect(() => {
    if (userKey === null) return undefined;

    let isCurrentRequest = true;

    const loadQuestions = async () => {
      try {
        const response = await questionService.getQuestions({ mine: true });

        if (!Array.isArray(response?.data)) {
          throw new Error("The server returned an unexpected question list.");
        }

        const questions = response.data.filter((question) =>
          isAuthoredByUser(question, user),
        );

        if (isCurrentRequest) {
          setRequestState({
            userKey,
            status: "success",
            questions,
          });
        }
      } catch (error) {
        if (isCurrentRequest) {
          setRequestState({
            userKey,
            status: "error",
            message: getErrorMessage(error),
          });
        }
      }
    };

    void loadQuestions();

    return () => {
      isCurrentRequest = false;
    };
  }, [user, userKey]);

  const currentResult =
    requestState?.userKey === userKey ? requestState : null;
  const isLoading = userKey !== null && currentResult === null;
  const errorMessage =
    userKey === null
      ? "Unable to identify the signed-in user."
      : currentResult?.status === "error"
        ? currentResult.message
        : null;
  const questions =
    currentResult?.status === "success" ? currentResult.questions : [];

  return (
    <div className={styles.myQuestions}>
      <section
        className={styles.myQuestions__hero}
        aria-labelledby="my-questions-title"
      >
        <div className={styles.myQuestions__heroCopy}>
          <p className={styles.myQuestions__eyebrow}>Your workspace</p>
          <h1 className={styles.myQuestions__title} id="my-questions-title">
            Your topics
          </h1>
          <p className={styles.myQuestions__description}>
            Only questions you created. Open one to read answers or add
            follow-ups. Rows use the same left accent as your threads on Home.
          </p>
        </div>
        <Link
          className={styles.myQuestions__newQuestion}
          to="/questions/ask"
        >
          <Plus size={18} aria-hidden />
          New question
        </Link>
      </section>

      {isLoading ? (
        <section className={styles.myQuestions__statePanel} role="status">
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--loading"]} ${styles.myQuestions__stateMessage}`}
          >
            Loading your questions...
          </div>
        </section>
      ) : errorMessage ? (
        <section className={styles.myQuestions__statePanel}>
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--error"]} ${styles.myQuestions__stateMessage}`}
            role="alert"
          >
            Failed to fetch questions. {errorMessage}
          </div>
        </section>
      ) : questions.length === 0 ? (
        <section className={styles.myQuestions__statePanel} role="status">
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--empty"]} ${styles.myQuestions__stateMessage}`}
          >
            You have not asked any questions yet. Use Ask a Question in the
            sidebar to start.
          </div>
        </section>
      ) : (
        <div className={styles.myQuestions__list}>
          {questions.map((question) => {
            const excerpt = getExcerpt(question.content);
            const answerCount = Number(question.answerCount || 0);
            const postedTime = timeAgo(question.createdAt);

            return (
              <Link
                className={styles.myQuestions__question}
                key={question.id}
                to={`/question/${encodeURIComponent(question.questionHash)}`}
              >
                <span className={styles.myQuestions__avatar} aria-hidden>
                  {getInitials(question.author) || "?"}
                </span>
                <span className={styles.myQuestions__questionBody}>
                  <span className={styles.myQuestions__questionHeading}>
                    <span className={styles.myQuestions__questionTitle}>
                      {question.title}
                    </span>
                    <span className={styles.myQuestions__yoursBadge}>Yours</span>
                  </span>
                  {excerpt && (
                    <span className={styles.myQuestions__excerpt}>
                      {excerpt}
                    </span>
                  )}
                  <span className={styles.myQuestions__meta}>
                    <span className={styles.myQuestions__answerCount}>
                      <MessageSquare size={13} aria-hidden />
                      {answerCount}{" "}
                      {answerCount === 1 ? "reply" : "replies"}
                    </span>
                    {postedTime && <span>{postedTime} by You</span>}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
