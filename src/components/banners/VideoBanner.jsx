import React from "react";
import './assets/styles/Banners.css';

const VideoBanner = () => {
    return (
        <div className="video-banner">
            <div className="video-banner-content">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/YbyFHb_bckk?si=oIeJuH-yQqlt0Qet" 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" r
                eferrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >
            </iframe>
            </div>
        </div>
    );
}

export default VideoBanner;