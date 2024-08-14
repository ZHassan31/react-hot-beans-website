import React from "react";
import "./styles.css";
import Navbar from "./NavBar";
function Footer() {

    const currentYear = new Date().getFullYear();

    return <div className="footer">
        <Navbar />
        <p>©Hot Beans {currentYear} - All rights reserved</p>

    </div>;
}

export default Footer;
