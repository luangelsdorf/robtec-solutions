import React from 'react';
import SobreNos from "../SobreNos";
import Proposito from "../Proposito";
import Produtos from "../Produtos";
import Form from "../Form";
import Banner from "../Banner";
import Mapa from "../Mapa";

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