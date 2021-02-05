import React from 'react';

export default function Mapa() {
    return (
        <div className="position-relative" id="mapContainer">
            <div id="frame-wrapper" className="embed-responsive position-absolute w-100">
                <iframe id="frame" className="embed-responsive-item"
                        src="https://www.google.com/maps/d/embed?mid=1P6p8P4ihRMHla8ROn2b-WNzaq9Q3fC5g&ll=-22.910349068933336%2C-48.01309710295611&z=7"
                        width="100%" height="650" />
            </div>
        </div>
    )
}