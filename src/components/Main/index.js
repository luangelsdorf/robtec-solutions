import React from 'react';
import SobreNos from "./components/SobreNos";
import Proposito from "./components/Proposito";
import Produtos from "./components/Produtos";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Mapa from "./components/Mapa";

export default function Main() {
    return (
        <main id="mainContent">
            <Banner />
            <div className="container">
                <SobreNos />
                <Proposito />
                <Produtos />
                <Form />
            </div>
            <Mapa />
        </main>
    )
}