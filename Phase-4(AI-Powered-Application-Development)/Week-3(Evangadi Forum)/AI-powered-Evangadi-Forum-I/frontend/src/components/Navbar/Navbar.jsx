import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, LogOut, Sparkles } from "lucide-react";
import styles from "./Navbar.module.css";

/**
 * Top bar: page title, debounced text search → `/dashboard?q=…`, optional AI semantic search.
 * Search state is driven by the URL on the dashboard so bookmarks and refresh keep context.
 */
export default function Navbar({ title, subtitle, user, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__titleBlock}>
        <h2 className={styles.navbar__pageTitle}>{title}</h2>
        {subtitle ? (
          <p className={styles.navbar__pageSubtitle}>{subtitle}</p>
        ) : null}
      </div>

      <NavbarSearch
        key={location.key}
        location={location}
        navigate={navigate}
      />

      <div className={styles.navbar__actions}>
        <div className={styles.navbar__user}>
          <span className={styles["navbar__user-name"]}>
            {user ? `${user.firstName} ${user.lastName}` : "Guest"}
          </span>
          <div className={styles["navbar__user-avatar"]}>
            <img
              src={
                user?.avatar ||
                `https://ui-avatars.com/api/?name=${
                  user?.firstName || "User"
                }+${user?.lastName || ""}&background=random`
              }
              alt="avatar"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {user && (
          <button
            type="button"
            className={styles.navbar__logout}
            onClick={onLogout}
            aria-label="Logout"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </header>
  );
}

function NavbarSearch({ location, navigate }) {
  const [searchTerm, setSearchTerm] = useState(() => {
    if (location.pathname !== "/dashboard") return "";
    const params = new URLSearchParams(location.search);
    return params.get("q") || params.get("semantic") || "";
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hasCurrentKeyword = params.has("q");
    const hasCurrentSemantic = params.has("semantic");
    const currentKeyword = params.get("q") || "";
    const currentSemantic = params.get("semantic") || "";
    const normalizedSearch = searchTerm.trim();

    if (
      (hasCurrentKeyword && normalizedSearch === currentKeyword) ||
      (hasCurrentSemantic && normalizedSearch === currentSemantic)
    ) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      if (normalizedSearch) {
        navigate(`/dashboard?q=${encodeURIComponent(normalizedSearch)}`);
      } else if (
        location.pathname === "/dashboard" &&
        (currentKeyword || currentSemantic)
      ) {
        navigate("/dashboard");
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.search, navigate, searchTerm]);

  const handleSemanticSearch = () => {
    const query = searchTerm.trim();
    if (query.length >= 5) {
      navigate(`/dashboard?semantic=${encodeURIComponent(query)}`);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      navigate(`/dashboard?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className={styles.navbar__search} onSubmit={handleSearchSubmit}>
      <div className={styles["navbar__search-icon"]}>
        <Search size={16} />
      </div>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search questions by keyword…"
        className={styles["navbar__search-input"]}
        aria-label="Search questions by keyword"
      />
      {searchTerm.trim().length >= 5 && (
        <button
          type="button"
          onClick={handleSemanticSearch}
          className={styles["navbar__semantic-button"]}
          title="Use AI Semantic Search"
        >
          <Sparkles size={14} />
          <span className={styles["navbar__semantic-text"]}>AI Search</span>
        </button>
      )}
    </form>
  );
}
