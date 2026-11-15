/**
 * Auth: combined login + register form; switches mode without changing routes.
 */
import { useState } from "react";

import { motion as Motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sparkles,
  Code,
  ArrowRight,
  Eye,
  EyeOff,
  MessageSquare,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import cohortAvatars from "../../assets/cohort-avatars.svg";
import styles from "./Auth.module.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getFieldError(field, value, isLogin) {
  if (field === "email") {
    const normalizedEmail = value.trim().toLowerCase();
    if (!normalizedEmail) return "Email is required.";
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      return "Please enter a valid email address.";
    }
  }

  if (field === "password") {
    if (!value.trim()) return "Password is required.";
    if (!isLogin && value.length < 6) {
      return "Password must be at least 6 characters long.";
    }
  }

  if (!isLogin && (field === "firstName" || field === "lastName")) {
    const name = value.trim();
    const label = field === "firstName" ? "First name" : "Last name";
    if (!name) return `${label} is required.`;
    if (name.length < 3) {
      return `${label} must be at least 3 characters long.`;
    }
  }

  return null;
}

function validateForm(values, isLogin) {
  const fields = isLogin
    ? ["email", "password"]
    : ["firstName", "lastName", "email", "password"];

  return fields.reduce((errors, field) => {
    const message = getFieldError(field, values[field], isLogin);
    if (message) errors[field] = message;
    return errors;
  }, {});
}

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  // Registration form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Keep validation state independent for each form mode.
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [submissionError, setSubmissionError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const activeErrors = isLogin ? loginErrors : registerErrors;

  const handleFieldChange = (field, value, setFieldValue) => {
    setFieldValue(value);

    const setFormErrors = isLogin ? setLoginErrors : setRegisterErrors;
    setFormErrors((currentErrors) => {
      const currentError = currentErrors[field];
      if (!currentError) return currentErrors;

      const nextError = getFieldError(field, value, isLogin);
      if (nextError === currentError) return currentErrors;

      const nextErrors = { ...currentErrors };
      if (nextError) {
        nextErrors[field] = nextError;
      } else {
        delete nextErrors[field];
      }
      return nextErrors;
    });

    setSubmissionError(null);
  };

  const handleModeToggle = () => {
    setIsLogin((currentMode) => !currentMode);
    setLoginErrors({});
    setRegisterErrors({});
    setSubmissionError(null);
    setSuccessMessage(null);
  };

  // Handle form submission for both login and registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);
    setSuccessMessage(null);
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    const errors = validateForm(
      { firstName, lastName, email, password },
      isLogin,
    );
    if (isLogin) {
      setLoginErrors(errors);
    } else {
      setRegisterErrors(errors);
    }
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Login flow
        await login({ email: normalizedEmail, password });
        setSuccessMessage("Sign-in successful. Redirecting...");
        // Clear form fields
        setEmail("");
        setPassword("");
        setShowPassword(false);
        // Delay redirect to show successful message
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Check location state for original URL after login
        // Redirect to original URL if present, otherwise dashboard
        const from = location.state?.from?.pathname || "/dashboard";
        navigate(from, { replace: true });
        navigate(from, { replace: true });
      } else {
        // Registration flow
        await register({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: normalizedEmail,
          password,
        });
        setSuccessMessage("Registration successful! Please log in.");
        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        // Automatically switch to login form after 1.5 seconds
        setTimeout(() => {
          setIsLogin(true);
          setRegisterErrors({});
          setSuccessMessage(null);
        }, 1500);
      }
    } catch (err) {
      setSubmissionError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.auth}>
      {/* Left: Info Section */}
      <section className={styles.auth__info}>
        <div className={styles.auth__infoContent}>
          <header className={styles.auth__infoHeader}>
            <button
              type="button"
              className={styles.auth__infoBranding}
              onClick={() => navigate("/")}
              title="Go to Home"
              aria-label="Evangadi Forum home"
            >
              <div className={styles.auth__infoLogo} aria-hidden>
                <MessageSquare
                  className={styles.auth__infoLogoIcon}
                  size={22}
                />
              </div>
              <div className={styles.auth__infoBrandCopy}>
                <p className={styles.auth__infoTitle}>Evangadi Forum</p>
                <p className={styles.auth__infoTagline}>
                  Learn together. Ask with context.
                </p>
              </div>
            </button>
            <p className={styles.auth__infoDescription}>
              Sign in to post technical questions, follow threads, and search
              the forum with both keyword and AI similarity modes, built for
              Evangadi coursework and peer review.
            </p>
          </header>

          <div className={styles.auth__features}>
            <div className={styles.auth__feature}>
              <div className={styles.auth__featureIcon}>
                <Sparkles size={20} />
              </div>
              <div className={styles.auth__featureContent}>
                <h3 className={styles.auth__featureTitle}>Visible reasoning</h3>
                <p className={styles.auth__featureDescription}>
                  Threads stay readable: markdown, code blocks, and replies
                  build a mini knowledge base your cohort can revisit before
                  exams.
                </p>
              </div>
            </div>
            <div className={styles.auth__feature}>
              <div className={styles.auth__featureIcon}>
                <Code size={20} />
              </div>
              <div className={styles.auth__featureContent}>
                <h3 className={styles.auth__featureTitle}>
                  Low-friction workflow
                </h3>
                <p className={styles.auth__featureDescription}>
                  One layout for asking, answering, and scanning search results,
                  so you spend energy on the problem, not on hunting controls.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.auth__infoFooter}>
            <div className={styles.auth__infoFooterContent}>
              <div className={styles.auth__infoAvatars}>
                <img
                  src={cohortAvatars}
                  className={styles.auth__infoAvatar}
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <span className={styles.auth__infoBadge}>
                Evangadi cohorts · weekly stand-ups · office-hour style help
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Right: Auth Forms */}
      <section className={styles.auth__formSection}>
        <div className={styles.auth__formContainer}>
          <AnimatePresence mode="wait">
            <Motion.div
              key={isLogin ? "login" : "register"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.auth__formHeader}>
                <h2 className={styles.auth__formTitle}>
                  {isLogin ? "Sign in to your account" : "Create an account"}
                </h2>
                <p className={styles.auth__formSubtitle}>
                  {isLogin
                    ? "Enter your email address and password to continue."
                    : "Complete the form below to create your account."}
                </p>
              </div>

              <form className={styles.auth__form} onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <div className={styles.auth__inputGroup}>
                      <label htmlFor="firstName" className={styles.auth__label}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className={styles.auth__input}
                        value={firstName}
                        aria-invalid={Boolean(activeErrors.firstName)}
                        aria-describedby={
                          activeErrors.firstName ? "firstName-error" : undefined
                        }
                        onChange={(e) =>
                          handleFieldChange(
                            "firstName",
                            e.target.value,
                            setFirstName,
                          )
                        }
                      />
                      {activeErrors.firstName && (
                        <p
                          id="firstName-error"
                          className={styles.auth__fieldError}
                        >
                          {activeErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div className={styles.auth__inputGroup}>
                      <label htmlFor="lastName" className={styles.auth__label}>
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        className={styles.auth__input}
                        value={lastName}
                        aria-invalid={Boolean(activeErrors.lastName)}
                        aria-describedby={
                          activeErrors.lastName ? "lastName-error" : undefined
                        }
                        onChange={(e) =>
                          handleFieldChange(
                            "lastName",
                            e.target.value,
                            setLastName,
                          )
                        }
                      />
                      {activeErrors.lastName && (
                        <p
                          id="lastName-error"
                          className={styles.auth__fieldError}
                        >
                          {activeErrors.lastName}
                        </p>
                      )}
                    </div>
                  </>
                )}

                <div className={styles.auth__inputGroup}>
                  <label htmlFor="email" className={styles.auth__label}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.auth__input}
                    value={email}
                    aria-invalid={Boolean(activeErrors.email)}
                    aria-describedby={
                      activeErrors.email ? "email-error" : undefined
                    }
                    onChange={(e) =>
                      handleFieldChange("email", e.target.value, setEmail)
                    }
                  />
                  {activeErrors.email && (
                    <p id="email-error" className={styles.auth__fieldError}>
                      {activeErrors.email}
                    </p>
                  )}
                </div>

                <div className={styles.auth__inputGroup}>
                  <div className={styles.auth__labelRow}>
                    <label htmlFor="password" className={styles.auth__label}>
                      Password
                    </label>
                  </div>
                  <div className={styles.auth__passwordWrap}>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`${styles.auth__input} ${styles.auth__inputPassword}`}
                      value={password}
                      aria-invalid={Boolean(activeErrors.password)}
                      aria-describedby={
                        activeErrors.password ? "password-error" : undefined
                      }
                      onChange={(e) =>
                        handleFieldChange(
                          "password",
                          e.target.value,
                          setPassword,
                        )
                      }
                    />
                    <button
                      type="button"
                      className={styles.auth__passwordToggle}
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                    >
                      {showPassword ? (
                        <EyeOff size={18} aria-hidden />
                      ) : (
                        <Eye size={18} aria-hidden />
                      )}
                    </button>
                  </div>
                  {activeErrors.password && (
                    <p id="password-error" className={styles.auth__fieldError}>
                      {activeErrors.password}
                    </p>
                  )}
                </div>

                {submissionError && (
                  <div className={styles.auth__error} role="alert">
                    {submissionError}
                  </div>
                )}

                {successMessage && (
                  <div className={styles.auth__success} role="status">
                    {successMessage}
                  </div>
                )}

                <div className={styles.auth__buttonContainer}>
                  <button
                    type="submit"
                    className={`${styles.auth__button} ${styles["auth__button--primary"]}`}
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : isLogin
                        ? "Sign In"
                        : "Create Account"}
                    {!loading && (
                      <ArrowRight
                        size={16}
                        className={styles.auth__buttonIcon}
                      />
                    )}
                  </button>
                </div>

                <div className={styles.auth__divider}>
                  <div className={styles.auth__dividerLine}>
                    <div className={styles.auth__dividerBorder}></div>
                  </div>
                  <div className={styles.auth__dividerText}>
                    Additional options
                  </div>
                </div>
              </form>

              <footer className={styles.auth__formFooter}>
                <p className={styles.auth__formFooterText}>
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <button
                    type="button"
                    onClick={handleModeToggle}
                    className={styles.auth__formFooterLink}
                  >
                    {isLogin ? "Create an account" : "Back to sign in"}
                  </button>
                </p>
              </footer>
            </Motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
