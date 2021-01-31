import React from "react";

export default function () {
    return (
        <section className="section">
            <div className="row mx-auto">
                <div className="col" />

                <div className="col-10 row justify-content-around" id="purpose-row">
                    <div className="col-3 d-flex align-items-center">
                        <div>
                            <p className="spaced-title">O QUE FAZEMOS</p>
                            <h1 className="bold-60">Propósito</h1>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <div>
                            <p className="light-15">Os setores de <strong>tecnologia</strong> da informação e
                                telecomunicações se mostram pilares importantes para o <strong>crescimento</strong> em
                                todos os mercados verticais.</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <div>
                            <p className="light-15">E isso nos motiva a construir uma <strong>relação de
                                confiança</strong> com os nossos clientes, oferecendo soluções modernas, inteligentes e
                                personalizadas, alinhando um pré e pós-vendas adequado para cada necessidade.</p>
                        </div>
                    </div>
                </div>

                <div className="col" />
            </div>
        </section>
    )
}