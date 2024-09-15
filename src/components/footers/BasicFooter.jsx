import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaMailchimp } from 'react-icons/fa';
import FooterIcon from '/sirius-logo-light.png';
import './assets/styles/Footers.css';

const BasicFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                <img
                    src={FooterIcon}
                    alt="Logo"
                    className="logo-image"
                />
                </div>
                <div className="footer-columns">
                <div className="footer-column">
                    <ul>
                    <li>Nuestro equipo</li>
                    <li>Reseñas</li>
                    <li>Contacto</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                    <li><FaFacebook/> Facebook</li>
                    <li><FaLinkedin/> LinkedIn</li>
                    <li><FaYoutube/> YouTube</li>
                    <li><FaInstagram/> Instagram</li>
                    </ul>
                </div>
                {/* <div className="footer-column">
                    <ul>
                    <li>Financiación y Precios</li>
                    </ul>
                </div> */}
                <div className="footer-column" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button className="footer-button">
                    <Link to="/contact">Contacto</Link>
                    </button>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2024 SIRIUS PROJECT – Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default BasicFooter;
