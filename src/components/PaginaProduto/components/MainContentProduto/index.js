import React from 'react';
import SectionProduto from "./components/SectionProduto";
import dados from 'data/data.json';
import Form from "components/Form";

export default function MainContentProduto() {
    const sections = dados.seguranca.produtos;
    let bool = true;
    return (
        <div className="container">

            {
                sections.map(m => {
                    bool = !bool
                    return <SectionProduto img={m.img} heading={m.heading} description={m.description} order={Number(bool)}/>
                })
            }


            <Form />
        </div>
    )
}