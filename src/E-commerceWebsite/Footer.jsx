import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Fashion Brand. All Rights Reserved.</p>
      
      <div className="social-media">
     <Link to="https://www.facebook.com/" className="icon"> <FaFacebookF /></Link> 
     <Link to="https://www.instagram.com/accounts/login/?hl=en" className="icon"> <FaInstagramSquare /></Link>
     <Link to="https://x.com/" className="icon"> < FaTwitter/></Link>
      </div>
    </footer>
  );
};

export default Footer;