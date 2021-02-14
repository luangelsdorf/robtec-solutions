import React from "react";
import HeaderProduto from './components/HeaderProduto';
import DestaqueProduto from './components/DestaqueProduto';
import CardProduto from './components/CardProduto';
import prod from 'data/data.json';
import {Link} from "react-router-dom";

export default function Produtos() {
    let produtos = prod.home.produtos

    return (
        <div className="row section gy-5" id="solucoes">
            <HeaderProduto />
            <DestaqueProduto />
            {
                produtos.map(m => {
                    return <Link key={`card-${produtos.indexOf(m)}`} to="/seguranca" className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between produto"><CardProduto imgSrc={m.name} displayText={m.displayText} /></Link>
                })
            }
        </div>
    )
}