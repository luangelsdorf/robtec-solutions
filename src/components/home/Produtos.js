import React from 'react';
import HeadingProduto from "./HeadingProduto";
import DestaqueProduto from "./DestaqueProduto";
import CardProduto from "./CardProduto";

export default function Produtos(props) {
    return (
        <div className="row section gy-5" id="solucoes">
            <HeadingProduto/>
            <DestaqueProduto/>
            {
                props.produtos.map(produto => {
                    return <div key={`card-${props.produtos.indexOf(produto)}`}
                                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between produto"><CardProduto
                        imgSrc={produto.name} displayText={produto.displayText}/></div>
                })
            }
        </div>
    )
}