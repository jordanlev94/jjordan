import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';


import {Link} from "react-router-dom"


function topbar() {
return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
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

      <div className="collapse navbar-collapse border" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active mx-5">
            <Link className="nav-link" to="/PageA">
              PageA <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link" to="/PageB">
              PageB
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link" to="/PageC">
              PageC
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link " to="PageD">
              PageD
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link " to="PageE">
              PageE
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link " to="PageF">
              PageF
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-item border ">
        <Link className="nav-link" to="/login">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </Link>
      </div>
    </nav>
  </div>
);
}

export default topbar