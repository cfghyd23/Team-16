import React from "react";
import { Link } from "react-router-dom";
import Issues from "./Issues";
import Announcements from "./Announcements";

function AdminHome() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item text-dark">
                  <Link className="nav-link" to="/Issues">
                    Issues
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Announcements">
                    Announcements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Tracking">
                    Tracking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AdminHome;
