import React from 'react';
import Heading from "./Heading";
import Destaque from "./Destaque";
import Card from "./Card";
import Link from 'next/link';

export default function Solucoes(props) {
    console.log(props)
    return (
        <div className="row section gy-5" id="solucoes">
            <Heading/>
            <Destaque/>
            {
                props.solucoes.map(produto => {
                    return (
                        <Link href={`/solucoes/${produto.name}`} key={`card-${produto.id}`}>
                            <a className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between produto">
                                <Card imgSrc={produto.name} displayText={produto.displayText} />
                            </a>
                        </Link>
                    )
                })
            }
        </div>
    )
}