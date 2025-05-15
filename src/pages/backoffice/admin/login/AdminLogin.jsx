import React, { useState, useContext } from "react";
import "./AdminLogin.css";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await login(username, password);
    if (!result.success) {
      setError(result.message);
      setLoading(false);
    } else {
      setError("");
      setLoading(false);
      navigate("/admin/ProductList");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
