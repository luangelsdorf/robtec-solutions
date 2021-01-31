import React from "react";
import sobreNos from 'assets/img/Sobre-Nós.svg';
import aspas from 'assets/img/aspas.svg';

export default function () {
    return (
        <section className="section">
            <div className="row mx-auto">
                <div className="col" />

                <div className="col-10 row">
                    <div className="col-7">
                        <div className="position-relative">
                            <img src={sobreNos} id="sobre-nos-img" alt="sobre-nos" width="670" height="500" />
                                <div className="position-absolute flex-center" id="quote">
                                    <span>Um mix de soluções que trazem tranquilidade para que você possa se dedicar apenas para o crescimento do seu negócio.</span>
                                </div>
                                <div className="position-absolute" id="aspas">
                                    <img src={aspas} alt="aspas" />
                                </div>
                        </div>
                    </div>
                    <div className="col-1" />
                    <div className="col-4 d-flex align-items-center">
                        <div>
                            <p className="spaced-title">SOBRE NÓS</p>
                            <h1 className="bold-60">Conheça <br /> a Robtec</h1>
                            <p className="medium-17">Estrategicamente sediada na cidade de Bauru, região central do
                                estado de São Paulo e filiais na cidade de Campinas/SP e São Paulo/SP, atendemos todo o
                                mercado nacional.</p>
                            <p className="light-15">Presente no mercado à quase 30 anos se destacando como um dos
                                maiores integradores de sistemas para radiocomunicação profissional, desenvolvendo e
                                entregando soluções de voz, dados, imagens, segurança eletrônica, infraestrutura e
                                sinalização áudio visual para grandes companhias e governos espalhados por todo o
                                Brasil.</p>
                        </div>
                    </div>
                </div>

                <div className="col" />
            </div>
        </section>
    )
}