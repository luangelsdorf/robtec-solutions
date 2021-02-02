import React from "react";
import linkedin from 'assets/img/linkedin.svg';

export default function () {
    return (
        <footer className="footer d-flex w-100 justify-content-between py-4">
            <div className="d-flex align-items-center">
                <span className="footer-text">Copyright © 2020 – Robtec Solutions</span>
            </div>
            <div>
                <img src={linkedin} alt="linkedin-logo" />
            </div>
        </footer>
    )
}