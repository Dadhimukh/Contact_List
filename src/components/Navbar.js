import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5">
          <img src="https://cdn-icons-png.flaticon.com/32/9839/9839447.png" />{" "}
          Contact List
        </Link>
        <div className=" text-end">
          <Link to="/add" className="btn btn-outline-light fw-bold bg-success">
            Add Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
