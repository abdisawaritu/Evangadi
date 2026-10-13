import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./PasswordToggle.css";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility.
  const togglePassword = () => {
    setShowPassword((previousValue) => !previousValue);
  };

  // Handle form submission for this frontend exercise.
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Login form submitted for: ${username}`);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1 className="login-title">Login Form</h1>

        <form onSubmit={handleSubmit}>
          {/* Username field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
              autoComplete="username"
              required
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Login button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

export default PasswordToggle;
