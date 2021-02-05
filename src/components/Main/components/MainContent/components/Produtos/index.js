import React from "react";
import HeaderProduto from './components/HeaderProduto';
import BannerProduto from './components/BannerProduto';
import CardProduto from './components/CardProduto';
import prod from 'data/produtos.json';

export default function Produtos() {
    let produtos = prod.produtos

    return ([
        <div className="row section gy-5" key="asd">
            <HeaderProduto />
            <BannerProduto />
            {
                produtos.map(m => {
                    return <CardProduto key={`card-${produtos.indexOf(m)}`} imgSrc={m.name} displayText={m.displayText} />
                })
            }
        </div>,
        <div id="faleConosco" key="dsa" />
    ])
}