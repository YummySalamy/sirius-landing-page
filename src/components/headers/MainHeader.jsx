import React, { useEffect, useState } from "react";
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
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [currentPath]);

    return (
        <div className="main-header">
            <div className="logo">
                <Link to="/">
                    <img src={SiriusLogo} alt="Sirius Logo" />
                </Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    {navLinks.map((link, index) => (
                        <li key={index} className={`nav-item ${currentPath === link.href ? 'active' : ''}`}>
                            <Link to={link.href} className="nav-link">{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default MainHeader;