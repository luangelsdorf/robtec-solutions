import React from 'react';
import Card from "../home/Card";
import Link from "next/link";

export default function Relacionados(props) {
    return (
        <div className="row justify-content-center gy-5" id="relacionados">
            <div className="d-flex justify-content-center">
                <div>
                    <p className="spaced-title text-center">CONHEÇA MAIS DO NOSSO TRABALHO</p>
                    <h1 className="bold-60 text-center">Produtos Relacionados</h1>
                </div>
            </div>

                {
                    props.cards.map(card => {
                        return (
                            <Link href={`/solucoes/${card.name}`} key={`card-${card.id}`}>
                                <a className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between produto">
                                    <Card imgSrc={card.name} displayText={card.displayText} />
                                </a>
                            </Link>
                        )
                    })
                }

        </div>
    )
}