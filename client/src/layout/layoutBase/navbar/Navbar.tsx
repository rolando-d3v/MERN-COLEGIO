import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="div_nav">
      <nav className="navbar">
        <div className='logo_content'  >
            <img src="assets/es.png" alt="logo"/>
            <span className='text_logo' >Arzobispado</span>
        </div>
        <div className='nav_1'  >
          <Link className="nav_link" to="/">
            Home
          </Link>
          <Link className="nav_link" to="/registro">
            Registro
          </Link>
        </div>
      </nav>
    </div>
  );
}
