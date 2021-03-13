import React from 'react';

export default function BottomBar() {
    return (
        <div className="footer w-100 py-4 position-absolute" id="onde-encontrar">
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <span className="footer-text">Copyright © 2020 – Robtec Solutions</span>
                </div>
                <div>
                    <img src="/img/linkedin.svg" alt="linkedin-logo" />
                </div>
            </div>
        </div>
    )
}