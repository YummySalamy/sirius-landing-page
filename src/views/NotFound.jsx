import React from "react";
import './assets/styles/Views.css';

const NotFound = () => {
    return (
        <div className="not-found">
            {/* <h1>We are sorry, the page you are looking for does not exist.</h1> */}
            <h1>Page not found...</h1>
            <h1 className="not-found-face">:(</h1>
            <p className="not-found-text">We are working hard to provide the best experience to our users. Please, try again later.</p>
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    )
}

export default NotFound;