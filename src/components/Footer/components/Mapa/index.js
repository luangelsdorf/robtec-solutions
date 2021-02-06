import React from 'react';
import mapa from 'assets/img/Map.png';

export default function Mapa() {
    return (
        <div id="map-container" className="position-absolute">
            <img src={mapa} alt="Mapa" id="map-img" />
        </div>
    )
}