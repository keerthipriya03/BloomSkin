import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" style={{ height: "80px", paddingTop: "20px", paddingBottom: "20px", fontSize: "1.2rem" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Bloom Skin</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacts</Link>
              </li>
            </ul>
            <span className="navbar-text">
              Beautiful Skin Starts Here
            </span>
          </div>
        </div>
      </nav>
      <footer>

      </footer>
    </div>
  );
}

export default Navbar;
