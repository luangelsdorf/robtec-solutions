import React from 'react';
import SobreNos from "./components/SobreNos";
import Proposito from "./components/Proposito";
import ListaProdutos from "./components/ListaProdutos";
import Form from "components/Form";

export default function MainContent() {
    return (
        <div className="container" id="mainContent">
            <SobreNos />
            <Proposito />
            <ListaProdutos />
            <Form />
        </div>
    )
}