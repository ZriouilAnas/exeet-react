import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      setError("");
      // Handle redirection or further logic here
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                style={{ ...styles.input, paddingRight: "60px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login
          </button>

          {error && <div style={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    color: "black",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    width: "300px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  loginButton: {
    width: "100%",
    padding: "0.6rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
    textAlign: "center",
  },
};

export default LoginPage;
