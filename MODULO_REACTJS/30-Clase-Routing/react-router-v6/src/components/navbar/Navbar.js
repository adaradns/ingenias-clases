import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ items }) => {
    return(
        <nav className="navbar">
            <ul>
                {items.map((item, index) => { //1.<a href="/home">home</a> //2. <a href="/about">about</a>
                    return <li key={index}><Link to={`/${item}`}>{item}</Link></li>
                })}
            </ul>
        </nav>
    );
}

export default Navbar;