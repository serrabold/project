import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './logov.jpg';

function Navbar() {
    return (
      
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="50" height="54" /> Valkyrie Vault
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Valkyrie Vault Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <img src={logo} alt="Logo" width="20" height="20" /> Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    <img src={logo} alt="Logo" width="20" height="20" /> About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    <img src={logo} alt="Logo" width="20" height="20" /> Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/tasks">
                    <img src={logo} alt="Logo" width="20" height="20" /> Tasks
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/team">
                    <img src={logo} alt="Logo" width="20" height="20" /> Team
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/calendar">
                    <img src={logo} alt="Logo" width="20" height="20" /> Calendar
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={logo} alt="Logo" width="20" height="20" /> Settings
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="/settings">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Preferences</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar