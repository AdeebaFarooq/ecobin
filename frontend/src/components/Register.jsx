import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1); // 1: Register form, 2: OTP verification
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes for name, email, password
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit registration to backend, backend sends OTP
  const handleRegister = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/user/register", formData);
      toast.success(res.data.message || "OTP sent to your email!");
      setStep(2); // go to OTP verification step
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
    setBtnLoading(false);
  };

  // Verify OTP entered by user
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/verify-otp", {
        email: formData.email,
        otp,
      });
      toast.success(res.data.message || "Registration successful!");
      navigate("/login"); // redirect to login after successful registration
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    }
    setBtnLoading(false);
  };

  return (
    <div className="auth-page">
      <Toaster />
      <div className="auth-form">
        {step === 1 && (
          <>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button disabled={btnLoading} type="submit" className="common-btn">
                {btnLoading ? "Sending OTP..." : "Register"}
              </button>
            </form>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Verify OTP</h2>
            <form onSubmit={handleVerifyOtp}>
              <label>Enter OTP sent to your email</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
              />
              <button disabled={btnLoading} type="submit" className="common-btn">
                {btnLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
            <p>
              Didn't receive OTP? <button onClick={() => setStep(1)} disabled={btnLoading}>Resend</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
