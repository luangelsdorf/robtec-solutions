import React from "react";
import HeaderProduto from './components/HeaderProduto';
import DestaqueProduto from './components/DestaqueProduto';
import CardProduto from './components/CardProduto';
import prod from 'data/data.json';

export default function Produtos() {
    let produtos = prod.home.produtos

    return (
        <div className="row section gy-5">
            <HeaderProduto />
            <DestaqueProduto />
            {
                produtos.map(m => {
                    return <CardProduto key={`card-${produtos.indexOf(m)}`} imgSrc={m.name} displayText={m.displayText} />
                })
            }
        </div>
    )
}