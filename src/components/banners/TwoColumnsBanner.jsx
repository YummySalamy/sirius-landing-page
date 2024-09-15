import React from "react";
import { Link } from "react-router-dom";
import SiriusMockup from './assets/images/sirius-mockup.png';
import './assets/styles/Banners.css';

const TwoColumnsBanner = () => {
    return (
        <section className="two-columns-banner">
            <div className="left-column">
                <h2 className="left-column-title">¿Who are we?</h2>
                <p className="left-column-text">We are a group of educators who are passionate about providing the best education to our students. We believe that education is the key to a better future. In our institution, we strive to provide the best physics & mathematics learning experience to our students.</p>
                {/* <Link to="/about" className="left-column-cta">
                    <button className="cta-btn">
                        Learn More
                    </button>
                </Link> */}
            </div>
            <div className="right-column">
                <img className="right-column-img" src={SiriusMockup} alt="Two Columns Banner" />
            </div>
        </section>
    )
}

export default TwoColumnsBanner;
