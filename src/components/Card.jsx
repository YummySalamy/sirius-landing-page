import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;