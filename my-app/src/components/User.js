import React from "react";
import { Link } from "react-router-dom";

function User() {
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
                <li className="nav-item">
                  <Link className="nav-link" to="/Announcements">
                    Announcements
                  </Link>
                </li>
                <li className="nav-item text-dark">
                  <Link className="nav-link" to="/Peer-2-Peer">
                    Connect to Peers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RaiseIssue">
                    RaiseIssue
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Donation">
                    Donation
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

export default User;
