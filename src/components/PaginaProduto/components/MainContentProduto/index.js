import React from 'react';
import SectionProduto from "./components/SectionProduto";
import dados from 'data/data.json';
import Form from "components/Form";

export default function MainContentProduto() {
    const sections = dados.seguranca.produtos;
    let flexOrder = true;
    return (
        <div className="container">

            {
                sections.map(m => {
                    flexOrder = !flexOrder
                    return <SectionProduto key={`sec-${sections.indexOf(m)}`} img={m.img} heading={m.heading} description={m.description} order={Number(flexOrder)}/>
                })
            }


            <Form />
        </div>
    )
}