import React from 'react';
import Heading from "./Heading";
import Destaque from "./Destaque";
import Card from "./Card";

export default function Solucoes(props) {
    return (
        <div className="row section gy-5" id="solucoes">
            <Heading/>
            <Destaque/>
            {
                props.solucoes.map(produto => {
                    return <div key={`card-${props.solucoes.indexOf(produto)}`}
                                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between produto"><Card
                        imgSrc={produto.name} displayText={produto.displayText}/></div>
                })
            }
        </div>
    )
}