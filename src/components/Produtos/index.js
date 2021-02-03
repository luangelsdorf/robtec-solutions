import React from "react";
import HeaderProduto from './components/HeaderProduto';
import BannerProduto from './components/BannerProduto';
import CardProduto from './components/CardProduto';
import prod from 'data/produtos.json';

export default function Produtos() {
    let produtos = prod.produtos

    return (
        <div className="row gy-5 section">
            <HeaderProduto />
            <BannerProduto />
            {
                produtos.map(m => {
                    return <CardProduto imgSrc={m.name} displayText={m.displayText} />
                })
            }
        </div>
    )
}