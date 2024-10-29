import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo">Mithra</h2>
        <nav>
          <ul>
            <li>
              <a href="/home">Book Service</a>
            </li>
            <li>
              <a href="/home">About Us</a>
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
};
