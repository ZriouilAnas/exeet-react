import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = form;

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Example: fake registration success
    alert(`User ${username} registered successfully!`);
    setError("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ ...styles.input, paddingRight: "60px" }}
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

          <button type="submit" style={styles.submitButton}>
            Register
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
  submitButton: {
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

export default RegisterPage;
