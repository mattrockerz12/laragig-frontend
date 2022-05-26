import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, setLogin }) => {
  const handleLogout = async () => {
    await axios.post("http://localhost:8000/api/laragig/logout");

    setLogin();
  };

  let links;

  if (user) {
    links = (
      <>
        <div className="d-md-none my-2">
          <Link className="btn btn-warning" onClick={handleLogout} to="/">
            Logout
          </Link>
        </div>
        <div className="d-none d-md-block">
          <Link className="btn btn-warning" onClick={handleLogout} to="/login">
            Logout
          </Link>
        </div>
      </>
    );
  } else {
    links = (
      <>
        <div className="d-md-none my-2">
          <Link className="btn btn-light me-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>
        <div className="d-none d-md-block">
          <Link className="btn btn-light me-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>
      </>
    );
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span>Logo</span>
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-6"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-6" className="collapse navbar-collapse flex-grow-0">
          {links}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
