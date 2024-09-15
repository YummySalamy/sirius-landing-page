import React from "react";
import MainHeader from "../components/headers/MainHeader";
import AboutUsBanner from "../components/banners/AboutUsBanner";
import GitHubInfo from "../components/extra/GitHubInfo";
import BasicFooter from "../components/footers/BasicFooter";
import './assets/styles/Views.css'

const About = () => {

    return (
        <div className="landing-page">
            <MainHeader />
            <AboutUsBanner />
            <GitHubInfo />
            <BasicFooter />
        </div>
    )

}

export default About;