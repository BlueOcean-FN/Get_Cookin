import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-router-dom"
import './NavBurger.css'

const NavBurger = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <Link to="/search" onClick={showNavbar}>Home</Link>
        <Link to="/profile" onClick={showNavbar}>Profile</Link>
        <Link to="/saved" onClick={showNavbar}>Saved Recipes</Link>
        <Link to="/login">Sign Out</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>∂
        <FaBars />
      </button>
    </header>
  );
}

export default NavBurger