import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/Bg.png';
import logo from "../../images/Urban Riders.png"
import bike from "../../images/Frame-1.png"


const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                       
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;