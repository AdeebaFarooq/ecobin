import React, { useState } from "react";
import "./auth.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (type) => {
    try {
      setBtnLoading(true);

      // Choose correct endpoint
      const endpoint =
        type === "user"
          ? "http://localhost:5000/api/user/login"
          : "http://localhost:5000/api/recycler/login";

      const res = await axios.post(endpoint, {
        email,
        password,
      });

      // // Save to localStorage
       localStorage.setItem("token", res.data.token);
       localStorage.setItem("role", res.data.user.role); // either "user" or "recycler"
      // localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success(res.data.message);
      navigate("/");

    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setBtnLoading(false);
    }
  };

  const handleSubmit = (e, role) => {
    e.preventDefault();
    loginUser(role);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login to E-Waste Portal</h2>

        <form>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Buttons */}
          <div className="d-flex gap-3 mt-3">
            <button
              type="submit"
              className="common-btn"
              disabled={btnLoading}
              onClick={(e) => handleSubmit(e, "user")}
            >
              {btnLoading ? "Logging in..." : "Login as User"}
            </button>

            <button
              type="submit"
              className="common-btn"
              disabled={btnLoading}
              onClick={(e) => handleSubmit(e, "recycler")}
            >
              {btnLoading ? "Logging in..." : "Login as Recycler"}
            </button>
          </div>
        </form>

        <p className="mt-3">
          New to our portal? <Link to="/user/register">Register</Link>
        </p>
        <p>
          <Link to="/user/forgot">Forgot password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
