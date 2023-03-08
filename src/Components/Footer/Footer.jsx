import React from "react";
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
        <div className="footer-content">
            <h3>Get Cookin'</h3>
            <p>Better Ingredients better Paul's papa john's</p>
            <ul className="socials">
                <li><Link to="/"><FaFacebook /></Link></li>
                <li><Link to="/"><FaTwitter /></Link></li>
                <li><Link to="/"><FaInstagram /></Link></li>
                <li><Link to="/"><FaYoutube /></Link></li>
                <li><Link to="/"><FaGithub /></Link></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2023 GetCookin'. designed by <span>Paul</span></p>
        </div>
    </footer>
    )
};

export default Footer