import React from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import {fb} from "../../firebase";

const Navbar = () => {
  const user = useStoreState((state) => state.user);
  const setUser = useStoreActions((actions) => actions.setUser);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ marginBottom: "2rem" }}
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h3 style={{ fontSize: "20px" }}>Paul Finkbeiner</h3>
        </Link>

        {/* <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/Home">
            Home
          </Link>

          <Link className="navbar-item" to="/Pages">
            Pages
          </Link>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            {user ? (
              <div className="columns">
                <div className="column is-6">{user.email}</div>
                <div className="column is-6">
                  <div className="buttons">
                    <Link
                      onClick={() =>{
                        
                        setUser(undefined)
                        
                        fb
                          .auth()
                          .signOut()
                          .then(() => {
                            window.location.replace("/");
                          })
                        }
                      }
                      className="button is-danger"
                    >
                      <strong>Log Out</strong>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="buttons">
                <Link to="/Register" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/Login" className="button is-light">
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
