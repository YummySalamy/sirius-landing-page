import React from "react";
import { Link } from "react-router-dom";
import ArduinoRender from './assets/images/arduino-uno-render.jpg';
import './assets/styles/Banners.css';

const TwoColumnsBannerRightImage = () => {
    return (
        <section className="two-columns-banner">
            <div className="right-column">
                <img className="right-column-img" src={ArduinoRender} alt="Two Columns Banner"/>
            </div>
            <div className="left-column">
                <h2 className="left-column-title">Learn with the best</h2>
                <p className="left-column-text">We use the latest technology to provide the best learning experience to our students. Our courses are designed to be interactive and engaging, so that our students can learn in a fun and exciting way. With our courses, you can learn at your own pace and in your own time. Our courses are suitable for beginners as well as advanced learners, so no matter what your level of experience is, you can benefit from our courses.</p>
                <Link to="/about" className="left-column-cta">
                    <button className="cta-btn">
                        Learn More
                    </button>
                </Link>
            </div>
            
        </section>
    )
}

export default TwoColumnsBannerRightImage;
