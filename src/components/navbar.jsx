import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/myimages" className="nav-link active">
                  My images
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/upload" className="nav-link active">
                  Upload images
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Public images
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
