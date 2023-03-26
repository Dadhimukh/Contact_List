import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5">
          <img
            src="https://cdn-icons-png.flaticon.com/32/9839/9839447.png"
            alt="Logo"
          />
          ContactList
        </Link>
        <div className=" text-end">
          <Link to="/add" className="btn btn-outline-light fw-bold">
            <img
              src="https://cdn-icons-png.flaticon.com/32/3059/3059520.png"
              alt="add contact"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
