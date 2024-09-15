import React from "react";
import { FaQuestion, FaHandsHelping } from "react-icons/fa";
import './assets/styles/Banners.css';

const AboutUsBanner = () => {
    return (
        <div className="about-us-banner">
            <div className="about-us-banner-content">
                <h1>About Sirius</h1>
                <p>
                    Sirius is a non-profit organization dedicated to democratizing education by creating low-cost lab tools for schools and universities in under-resourced communities. 
                    Join us in our mission to close the educational gap by making essential resources accessible to all.
                </p>
                <div className="about-us-icons">
                    <a href="#faq" className="about-us-icon">
                        <FaQuestion />
                        <p>FAQ</p>
                    </a>
                    <a href="#contribute" className="about-us-icon">
                        <FaHandsHelping />
                        <p>Contribute</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUsBanner;