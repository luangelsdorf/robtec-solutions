import React from "react";
import linkedin from 'assets/img/linkedin.svg';

export default function BottomBar() {
    return (
        <div className="footer w-100 py-4 position-absolute">
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <span className="footer-text">Copyright © 2020 – Robtec Solutions</span>
                </div>
                <div>
                    <img src={linkedin} alt="linkedin-logo" />
                </div>
            </div>
        </div>
    )
}