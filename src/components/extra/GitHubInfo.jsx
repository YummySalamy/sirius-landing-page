import React from "react";
import { FaGithub, FaRegStar, FaSearch } from "react-icons/fa";
import './assets/styles/Extra.css';

const GitHubInfo = () => {
    return (
        <div className="github-container">
            <div className="github-info">
                <h1>SIRIUS PROJECT</h1>
                <p>Explore the repository for this project. Star it, fork it, or search for other great projects.</p>
                <a target="_blank" rel="noreferrer" href="https://github.com/YummySalamy/sirius-landing-page">
                    <button className="github-button">
                        <FaGithub /> GitHub Repository
                    </button>
                </a>
                <div className="github-icons">
                    <span className="github-icon">
                        <FaRegStar />
                        <p>Star</p>
                    </span>
                    <span className="github-icon">
                        <FaSearch />
                        <p>Search</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default GitHubInfo;