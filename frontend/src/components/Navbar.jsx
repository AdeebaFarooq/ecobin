import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [role, setRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    setRole(storedRole);
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold text-success" to="/">EcoBin</Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Role-based links */}
            {role === "user" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/requestpickup">Request Pickup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/history">History</Link>
                </li>
              </>
            )}

            {role === "recycler" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/all-requests">All Requests</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tracking">Tracking</Link>
                </li>
              </>
            )}

            {/* Show Login or Account */}
            {!isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/authpage">Login</Link>
              </li>
            ) : (
              
              <li className="nav-item">
                <Link className="nav-link" to="/account">Account</Link>
              </li>
            )}

            {/* Logout */}
            {isLoggedIn && (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
