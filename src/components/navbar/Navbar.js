import React from "react";
import "../../assets/css/Navbar.css";
import {Link} from 'react-router-dom'











function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <form className="container-fluid justify-content-start">
          
            <Link to="/" replace><a  className="navbar-brand font-weight-bold" id="branding">Gauss 42</a></Link>
          
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
{/*         <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
                <Link to="/" className="nav-link" replace>Inici</Link>
              
            </li>
            <li className="nav-item">
              
                <Link to="/help" className="nav-link active" replace>Ajuda</Link>
              
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
