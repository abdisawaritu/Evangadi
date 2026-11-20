import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import styles from "./Footer.module.css";

const APP_LINK_GROUPS = [
  {
    title: "Forum",
    links: [
      { label: "Home", to: "/dashboard" },
      { label: "Your topics", to: "/my-questions" },
      { label: "Ask a question", to: "/questions/ask" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Public overview", to: "/" },
      { label: "Course RAG", href: "/#course-rag" },
    ],
  },
];

const LANDING_LINK_GROUPS = [
  {
    title: "Explore",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Course RAG", href: "#course-rag" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Sign in", to: "/auth" },
      { label: "Open the forum", to: "/dashboard" },
    ],
  },
];

export default function Footer({ variant = "app" }) {
  const isLanding = variant === "landing";
  const linkGroups = isLanding ? LANDING_LINK_GROUPS : APP_LINK_GROUPS;
  const brand = (
    <>
      <span className={styles.footer__brandMark} aria-hidden="true">
        <MessageSquare size={20} strokeWidth={2} />
      </span>
      <span className={styles.footer__brandName}>Evangadi Forum</span>
    </>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__brand}>
          {isLanding ? (
            <a
              className={styles.footer__brandLink}
              href="#overview"
              aria-label="Evangadi Forum home"
            >
              {brand}
            </a>
          ) : (
            <Link
              className={styles.footer__brandLink}
              to="/dashboard"
              aria-label="Evangadi Forum home"
            >
              {brand}
            </Link>
          )}
          <p className={styles.footer__tagline}>
            Learn together. Ask with context. A learner-led place to share
            technical questions and find peer answers.
          </p>
        </div>

        {linkGroups.map((group) => (
          <nav
            aria-label={`Footer ${group.title.toLowerCase()} links`}
            className={styles.footer__group}
            key={group.title}
          >
            <h2 className={styles.footer__groupTitle}>{group.title}</h2>
            <ul className={styles.footer__linkList}>
              {group.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link className={styles.footer__link} to={link.to}>
                      {link.label}
                    </Link>
                  ) : (
                    <a className={styles.footer__link} href={link.href}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <p className={styles.footer__copyright}>
          © {new Date().getFullYear()} Evangadi Forum. For educational use.
        </p>
      </div>
    </footer>
  );
}
