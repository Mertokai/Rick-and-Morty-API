import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="text-center my-4 fw-bold text-success">
          Rick and Morty <span className="text-primary"> WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbarNav fs-5">
          <NavLink to="/" className="nav-link ">
            Characaters
          </NavLink>
          <NavLink to="/eposides" className="nav-link">
            Eposides
          </NavLink>
          <NavLink to="/location" className="nav-link">
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
