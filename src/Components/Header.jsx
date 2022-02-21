import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
       <header>
           <div className="logo">React</div>
           <nav>
               <ul>
                    <Link to="movies">Movies</Link>
                    <Link to="gallery">Gallery</Link>
                    <Link to="about">About us</Link>
                    <Link to="contact-us">Contact us</Link>
                </ul>               
           </nav>
       </header>
    );
}

export default Header;