import React from 'react';
import Mapa from "./components/Mapa";
import BottomBar from "./components/BottomBar";

export default function Footer() {
    return (
        <footer className="position-relative">
            <Mapa />
            <BottomBar />
        </footer>
    )
}