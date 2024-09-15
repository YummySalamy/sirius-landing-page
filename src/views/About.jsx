import React from "react";
import MainHeader from "../components/headers/MainHeader";
import GitHubInfo from "../components/extra/GitHubInfo";
import BasicFooter from "../components/footers/BasicFooter";
import './assets/styles/Views.css'

const About = () => {

    return (
        <div className="landing-page">
            <MainHeader />
            <GitHubInfo />
            <BasicFooter />
        </div>
    )

}

export default About;