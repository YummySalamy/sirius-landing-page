import React from "react";
import { Link } from "react-router-dom";
import './styles/Hero.css';

const BasicHero = () => {
    return (
        <section className="basic-hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to <span>Sirius</span></h1>
                <p className="hero-text">Bringing the best education to your doorstep</p>
                <Link to="/services" className="hero-cta">
                    <button className="cta-btn">
                        Learn More
                    </button>
                </Link>
            </div>
        </section>
    )
}


export default BasicHero;