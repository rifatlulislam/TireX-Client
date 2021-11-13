import React from "react";
import { Link } from "react-router-dom";
import "./Text.css";

const Text = () => {
  return (
    <div>
      <div class="navbar">
        <div class="container flex">
          <h1 class="logo">Meteor</h1>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/regiter">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Text;
