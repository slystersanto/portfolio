import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function NavBar() {

  
    const[isMenuOpen,setIsMenuOpen]=useState(false);
  
    function handleMenuToggle(){
      setIsMenuOpen(!isMenuOpen);
    }
  return (
    <header>
      <a href="#" className="logo">Santhosh Kumar Palani<span></span></a>
      {/* <div className="bx bx-menu" id="menu-icon"></div> */}
      <nav className="navbar">
      <button className="navbar-toggle" onClick={handleMenuToggle}>
        <i className="bx bx-menu"></i>
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
      </ul>
    </nav>
  

    </header>
  );
}

export default NavBar;
