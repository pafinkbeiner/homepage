import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <h3 style={{ fontSize: "20px" }}>Paul Finkbeiner</h3>
        </Link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

            <Link className="navbar-item" to="/Home">Home</Link>

            <Link className="navbar-item" to="/Pages">Pages</Link>

          {/* <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link tp="/Register" class="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/Login" class="button is-light">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
