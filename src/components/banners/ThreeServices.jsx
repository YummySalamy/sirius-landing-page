import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import './assets/styles/Banners.css';

const ThreeServices = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Mathematics",
            description: "We offer the best mathematics education in the country",
            image: "https://w0.peakpx.com/wallpaper/290/91/HD-wallpaper-physics-and-chemistry.jpg",
            link: "/services/mathematics"
        },
        {
            id: 2,
            title: "Physics",
            description: "We offer the best physics education in the country",
            image: "https://wallpapercave.com/wp/wp14061779.png",
            link: "/services/physics"
        },
        {
            id: 3,
            title: "Chemistry",
            description: "We offer the best chemistry education in the country",
            image: "https://images7.alphacoders.com/312/312092.jpg",
            link: "/services/chemistry"
        }
    ]);

    return (
        <section className="three-services">
            <div className="services-content">
                <h2 className="services-title">Our Services</h2>
                <div className="services-cards">
                    {services.map(service => (
                        <Card key={service.id}>
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={service.link} className="card-cta">
                                <button className="cta-btn">
                                    Learn More
                                </button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThreeServices;