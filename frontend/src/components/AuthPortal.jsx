import React from "react";
import { Link } from "react-router-dom";
// import "./AuthPortal.css";

export default function AuthPortal() {
  return (
    <div className="auth-container d-flex vh-100 flex-column">
      {/* Top Heading */}
      <div className="text-center py-4 " style={{ marginBottom: "2rem" }}>
    
      </div>
      <div className="text-center py-4" style={{ marginBottom: "2rem" }}>
        <h1 className="fw-bold">Choose Your Role</h1>
      </div>

      {/* Overlay */}
      <div className="auth-overlay d-flex w-100 flex-grow-1">
        {/* User Side */}
        <div className="auth-side user-side d-flex flex-column justify-content-center align-items-center text-center p-5">
          <div className="content-wrapper bg-white bg-opacity-75 p-4 rounded shadow">
            <h2 className="display-6 fw-bold text-success">Welcome, User!</h2>
            <p className="mt-2 text-muted fs-5">
              Schedule pickups, track your e-waste, and earn EcoPoints for your contributions to a greener tomorrow.
            </p>
            <div className="d-flex gap-3 mt-4 justify-content-center">
              <Link to="/user/login" className="btn btn-success px-4 py-2 shadow">
                Login
              </Link>
              <Link
                to="/user/register"
                className="btn btn-outline-success px-4 py-2 shadow"
                >Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Recycler Side */}
        <div className="auth-side recycler-side d-flex flex-column justify-content-center align-items-center text-center p-5">
          <div
            className="content-wrapper p-4 rounded shadow text-white"
            style={{ backgroundColor: "#0a6847" }}
          >
            <h2 className="display-6 fw-bold">Recycler Portal</h2>
            <p className="mt-2 text-white-50 fs-5">
              Log in to manage pickups and help us recycle responsibly across Telangana.
            </p>
            <div className="mt-4">
              <Link to="/recycler/login" className="btn btn-light px-4 py-2 shadow">
                Recycler Login
              </Link>
              <Link
                to="/user/register"
                className="btn btn-outline-success px-4 py-2 shadow"
                >Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
