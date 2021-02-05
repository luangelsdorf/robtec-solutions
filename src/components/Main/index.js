import React from 'react';
import MainContent from "./components/MainContent";
import Banner from "./components/Banner";
import Mapa from "./components/Mapa";

export default function Main() {
    return (
        <main>
            <Banner />
            <MainContent />
            <Mapa />
        </main>
    )
}