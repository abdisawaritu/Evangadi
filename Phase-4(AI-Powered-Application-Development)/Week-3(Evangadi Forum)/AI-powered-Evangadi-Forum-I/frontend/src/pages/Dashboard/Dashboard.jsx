import { useEffect, useState } from "react";
import { BookOpen, Library, MessageSquare, PenSquare } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { questionService } from "../../services/question/question.service.js";
import { isAuthoredByUser, timeAgo } from "../../lib/utils";
import pageStates from "../../styles/pageStates.module.css";
import styles from "./Dashboard.module.css";

const SHORTCUTS = [
  {
    title: "New question",
    description: "Share context, errors, and what you already tried",
    path: "/questions/ask",
    Icon: PenSquare,
  },
  {
    title: "Your topics",
    description: "Filtered list of threads you authored",
    path: "/my-questions",
    Icon: Library,
  },
  {
    title: "Knowledge base",
    description: "Course library, uploads, and retrieval-backed context for threads",
    path: "/rag-documents",
    Icon: BookOpen,
  },
];

function getErrorMessage(error) {
  return (
    error?.response?.data?.msg ||
    error?.response?.data?.message ||
    error?.message ||
    "Unable to load questions. Please try again."
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

function getAuthorName(author) {
  return [author?.firstName, author?.lastName].filter(Boolean).join(" ");
}

export default function Dashboard() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const semanticParam = searchParams.get("semantic");
  const isSemanticSearch = semanticParam !== null;
  const semanticQuery = semanticParam?.trim() ?? "";
  const keywordSearch = searchParams.get("q")?.trim() ?? "";
  const searchTerm = isSemanticSearch ? semanticQuery : keywordSearch;
  const requestKey = JSON.stringify([
    isSemanticSearch ? "semantic" : "keyword",
    searchTerm,
  ]);
  const invalidSemanticSearch =
    isSemanticSearch && semanticQuery.length < 5;

  const [requestState, setRequestState] = useState(null);

  useEffect(() => {
    if (invalidSemanticSearch) return undefined;

    let isCurrentRequest = true;

    const loadQuestions = async () => {
      try {
        const response = isSemanticSearch
          ? await questionService.searchQuestions({ query: semanticQuery })
          : await questionService.getQuestions(
              keywordSearch ? { search: keywordSearch } : {},
            );

        if (!Array.isArray(response?.data)) {
          throw new Error("The server returned an unexpected question list.");
        }

        if (isCurrentRequest) {
          setRequestState({
            key: requestKey,
            status: "success",
            questions: response.data,
            meta: response.meta,
          });
        }
      } catch (error) {
        if (isCurrentRequest) {
          setRequestState({
            key: requestKey,
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
  }, [
    invalidSemanticSearch,
    isSemanticSearch,
    keywordSearch,
    requestKey,
    semanticQuery,
  ]);

  const currentResult =
    requestState?.key === requestKey ? requestState : null;
  const isLoading = !invalidSemanticSearch && currentResult === null;
  const errorMessage = invalidSemanticSearch
    ? "Semantic search needs at least 5 characters."
    : currentResult?.status === "error"
      ? currentResult.message
      : null;
  const questions =
    currentResult?.status === "success" ? currentResult.questions : [];
  const totalQuestions = Number(currentResult?.meta?.total ?? questions.length);
  const totalReplies = questions.reduce(
    (total, question) => total + Number(question.answerCount || 0),
    0,
  );
  const unansweredQuestions = questions.filter(
    (question) => Number(question.answerCount || 0) === 0,
  ).length;
  const yourQuestions = questions.filter((question) =>
    isAuthoredByUser(question, user),
  ).length;

  const firstName = user?.firstName?.trim();
  const welcomeLine = firstName
    ? `Good to see you, ${firstName}.`
    : "Welcome to the forum.";

  const stats = [
    { label: "Questions", value: totalQuestions },
    { label: "Replies", value: totalReplies },
    { label: "Unanswered", value: unansweredQuestions },
    { label: "Yours", value: yourQuestions },
  ];

  const feedSubtitle = isSemanticSearch
    ? "Questions ranked by meaning, not only matching words."
    : keywordSearch
      ? `Questions matching “${keywordSearch}”.`
      : "Your threads use a slim left accent in this list.";
  const feedBadge = isSemanticSearch
    ? "SIMILARITY MATCHES"
    : keywordSearch
      ? "SEARCH RESULTS"
      : "NEWEST THREADS";

  return (
    <div className={styles.dashboard}>
      <section
        className={styles.dashboard__overview}
        aria-labelledby="dashboard-welcome"
      >
        <p className={styles.dashboard__eyebrow}>Forum home</p>
        <h1 className={styles.dashboard__welcome} id="dashboard-welcome">
          {welcomeLine}
        </h1>
        <p className={styles.dashboard__intro}>
          Start a topic, revisit your own threads, or skim the live feed. Search
          above works from any page once you are back on Home.
        </p>

        <nav className={styles.dashboard__shortcuts} aria-label="Forum actions">
          {SHORTCUTS.map(({ title, description, path, Icon }) => (
            <Link
              className={styles.dashboard__shortcut}
              key={path}
              to={path}
            >
              <span className={styles.dashboard__shortcutIcon} aria-hidden>
                <Icon size={20} />
              </span>
              <span className={styles.dashboard__shortcutCopy}>
                <span className={styles.dashboard__shortcutTitle}>{title}</span>
                <span className={styles.dashboard__shortcutDescription}>
                  {description}
                </span>
              </span>
            </Link>
          ))}
        </nav>

        {isLoading ? (
          <p className={styles.dashboard__snapshot} role="status">
            Loading snapshot for the list below…
          </p>
        ) : !errorMessage ? (
          <div className={styles.dashboard__snapshot}>
            <p className={styles.dashboard__snapshotCaption}>
              Figures below describe the newest threads in this feed (up to 100
              from the API).
            </p>
            <dl className={styles.dashboard__stats}>
              {stats.map(({ label, value }) => (
                <div className={styles.dashboard__stat} key={label}>
                  <dt className={styles.dashboard__statLabel}>{label}</dt>
                  <dd className={styles.dashboard__statValue}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </section>

      <section className={styles.dashboard__feed} aria-labelledby="feed-title">
        <header className={styles.dashboard__feedHeader}>
          <div>
            <h2 className={styles.dashboard__feedTitle} id="feed-title">
              Discussion feed
            </h2>
            <p className={styles.dashboard__feedSubtitle}>{feedSubtitle}</p>
          </div>
          <span className={styles.dashboard__feedBadge}>{feedBadge}</span>
        </header>

        {isLoading ? (
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--loading"]}`}
            role="status"
          >
            Loading recent questions…
          </div>
        ) : errorMessage ? (
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--error"]}`}
            role="alert"
          >
            {invalidSemanticSearch
              ? errorMessage
              : `Failed to load questions. ${errorMessage}`}
          </div>
        ) : questions.length === 0 ? (
          <div
            className={`${pageStates.pageStates__message} ${pageStates["pageStates__message--empty"]}`}
            role="status"
          >
            {searchTerm
              ? "No questions match this search."
              : "No questions found. Be the first to ask!"}
          </div>
        ) : (
          <div className={styles.dashboard__questionList}>
            {questions.map((question) => {
              const isMine = isAuthoredByUser(question, user);
              const authorName =
                getAuthorName(question.author) || "Community member";
              const excerpt =
                typeof question.content === "string"
                  ? question.content.replace(/\s+/g, " ").trim()
                  : "";
              const replyCount = Number(question.answerCount || 0);

              return (
                <Link
                  className={`${styles.dashboard__question} ${
                    isMine ? styles["dashboard__question--mine"] : ""
                  }`}
                  key={question.id}
                  to={`/question/${encodeURIComponent(question.questionHash)}`}
                >
                  <span className={styles.dashboard__avatar} aria-hidden>
                    {getInitials(question.author) || "?"}
                  </span>
                  <span className={styles.dashboard__questionBody}>
                    <span className={styles.dashboard__questionHeading}>
                      <span className={styles.dashboard__questionTitle}>
                        {question.title}
                      </span>
                      {isMine && (
                        <span className={styles.dashboard__yoursBadge}>
                          Yours
                        </span>
                      )}
                    </span>
                    {excerpt && (
                      <span className={styles.dashboard__questionExcerpt}>
                        {excerpt}
                      </span>
                    )}
                    <span className={styles.dashboard__questionMeta}>
                      <span className={styles.dashboard__replyCount}>
                        <MessageSquare size={13} aria-hidden />
                        {replyCount} {replyCount === 1 ? "reply" : "replies"}
                      </span>
                      <span>
                        {timeAgo(question.createdAt)} by{" "}
                        {isMine ? "You" : authorName}
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
