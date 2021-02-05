import React from 'react';
import SobreNos from "./components/SobreNos";
import Proposito from "./components/Proposito";
import Produtos from "./components/Produtos";
import Form from "./components/Form";

export default function MainContent() {
    return (
        <div className="container" id="mainContent">
            <SobreNos />
            <Proposito />
            <Produtos />
            <Form />
        </div>
    )
}