import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBurger.css'

const NavBurger = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
			"responsive_nav"
		);
    }


        return (
            <header>
                <h3>LOGO</h3>
                <nav ref={navRef}>
                    <a href="/">Home</a>
                    <a href="/profile">Profile</a>
                    <a href="/search">Saved Recipes</a>
                    <a href="/login">Sign Out</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        );
}

export default NavBurger