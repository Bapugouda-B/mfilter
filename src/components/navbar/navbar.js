import React from "react";
import { FaUserCircle } from "react-icons/fa";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div class="navbar">
        <div class="navbar-content">
          <img src="/mfilterit.png" alt="logo" class="navbar-logo" />
        </div>
        <div class="navbar-content">
          <FaUserCircle className="user-icon" />
        </div>
      </div>
    </div>
  );
}
