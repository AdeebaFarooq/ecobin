import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="min-vh-100 d-flex align-items-center py-5"
      style={{
        //   backgroundImage: `url(/images/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="container px-4 py-5 rounded-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <div className="row align-items-center g-5">
          {/* Hero Text */}
          <div className="col-md-6">
            <h1 className="display-5 fw-semibold text-success mb-3">
              Smart E-Waste Management for Telangana
            </h1>
            <p className="lead text-muted">
              Join our eco-friendly mission. Schedule free pickups and recycle old electronics easily while earning rewards.
            </p>
            <Link to="/authportal" className="btn btn-success mt-4 px-4 py-2 rounded-pill">
              Get Started
            </Link>
          </div>

          {/* Hero Image */}
          <div className="col-md-6">
            <img
              src="/images/recycle.jpg"
              alt="Recycling"
              className="img-fluid rounded-4 shadow"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="row text-center mt-5 g-4">
          {[
            {
              icon: "bi-calendar3",
              title: "Schedule Pickup",
              desc: "Pick a time. We’ll collect your e-waste from your doorstep.",
              link: "/request-pickup",
            },
            {
              icon: "bi-truck",
              title: "Track Waste",
              desc: "Monitor your e-waste pickup progress in real-time.",
              link: "/track-pickup",
            },
            {
              icon: "bi-gift",
              title: "Earn EcoPoints",
              desc: "Recycle responsibly and get rewarded with EcoPoints.",
              link: "/rewards",
            },
          ].map((card, index) => (
            <div className="col-md-4" key={index}>
              <Link to={card.link} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 hover-card rounded-4">
                  <div className="card-body py-4">
                    <i className={`bi ${card.icon} fs-1 text-success mb-3`}></i>
                    <h5 className="card-title fw-semibold text-dark">{card.title}</h5>
                    <p className="card-text text-muted">{card.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Styling */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .hover-card:hover {
            background-color: #e6f4ea !important;
            transform: translateY(-5px);
          }
          .hover-icon, .hover-title {
            transition: color 0.3s ease;
          }
          .hover-card:hover .hover-icon,
          .hover-card:hover .hover-title {
            color: #0a6847 !important;
          }
        `}
      </style>
    </section>
  );
}
