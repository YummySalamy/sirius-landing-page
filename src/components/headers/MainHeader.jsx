import React from "react";
import { Link } from "react-router-dom";
import SiriusLogo from '/sirius-logo-dark.png';
import './styles/Headers.css';

const navLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '/about'
    },
    {
        title: 'Services',
        href: '/services'
    },
    {
        title: 'Contact',
        href: '/contact'
    }
];

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="logo">
                <img src={SiriusLogo} alt="Sirius Logo" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    {navLinks.map((link, index) => (
                        <li key={index} className="nav-item">
                            <Link to={link.href} className="nav-link">{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MainHeader;