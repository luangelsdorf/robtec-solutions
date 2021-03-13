import React from 'react';
import Mapa from './Mapa'
import BottomBar from "./BottomBar";

export default function Footer() {
    return (
        <footer className="position-relative">
            <Mapa />
            <BottomBar />
        </footer>
    )
}