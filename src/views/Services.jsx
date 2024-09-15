import React from "react";
import MainHeader from "../components/headers/MainHeader";
import ThreeServices from "../components/banners/ThreeServices";
import BasicFooter from "../components/footers/BasicFooter";
import './assets/styles/Views.css'

const Services = () => {

    return (
        <div className="landing-page">
            <MainHeader />
            <ThreeServices />
            <BasicFooter />
        </div>
    )

}

export default Services;
