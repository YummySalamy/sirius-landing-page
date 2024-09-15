import React from "react";
import MainHeader from "../components/headers/MainHeader";
import BasicHero from "../components/hero/BasicHero";
import TwoColumnsBanner from "../components/banners/TwoColumnsBanner";
import TwoColumnsBannerRightImage from "../components/banners/TwoColumnsBannerRightImage";
import BasicFooter from "../components/footers/BasicFooter";
import './assets/styles/Views.css'

const LandingPage = () => {

    return (
        <div className="landing-page">
            <MainHeader />
            <BasicHero />
            <TwoColumnsBanner />
            <TwoColumnsBannerRightImage />
            <BasicFooter />
        </div>
    )

}

export default LandingPage;
