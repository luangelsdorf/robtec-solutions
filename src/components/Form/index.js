import React from "react";

export default function () {
    return (
        <div className="row section position-relative">
            <div className="col-4 flex-center color-white" id="contatos-col">
                <div>
                    <p className="spaced-title color-white">FALE CONOSCO</p>
                    <h1 className="bold-60 color-white">Contatos</h1>
                    <p className="light-15" style={{marginBottom: 1 + 'rem'}}>Solicite um orçamento pelo nosso
                        formulário, ou se preferir entre em <br /> contato através do canais abaixo:</p>
                    <p className="medium-15">vendas@robtecsolutions.com.br</p>
                    <p className="light-15"><span className="medium-15">Bauru:</span>     &nbsp;(14) 3203.3655
                    </p>
                    <p className="light-15"><span className="medium-15">Campinas:</span>  &nbsp;(19) 3500.8878
                    </p>
                    <p className="light-15"><span className="medium-15">São Paulo:</span> &nbsp;(11) 4259.1626
                    </p>
                </div>
            </div>

            <div className="col-8 row" id="form-col">
                <form className="row">
                    <div className="col-7 form-floating">
                        <input type="text" id="nome-e-sobrenome" placeholder="Nome e Sobrenome" className="form-control" />
                        <label className="placeholder-text" htmlFor="nome-e-sobrenome">Nome e Sobrenome</label>
                    </div>
                    <div className="col-5 form-floating">
                        <input type="text" id="empresa" placeholder="Empresa" className="form-control" />
                        <label className="placeholder-text" htmlFor="empresa">Empresa</label>
                    </div>
                    <div className="col-5 form-floating">
                        <input type="tel" id="telefone" placeholder="Telefone" className="form-control" />
                        <label className="placeholder-text" htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="col-7 form-floating">
                        <input type="email" id="email" placeholder="E-mail" className="form-control" />
                        <label className="placeholder-text" htmlFor="email">E-mail</label>
                    </div>
                    <div className="col-12 form-floating">
                        <textarea id="desc" placeholder="Descrição da Demanda" className="form-control" />
                        <label className="placeholder-text" htmlFor="desc">Descrição da Demanda</label>
                    </div>
                    <div className="col-5 d-flex align-items-center">
                        <button className="btn btn-outline-primary fira-sans border-radius-0">
                            Enviar Solicitação
                        </button>
                    </div>
                    <div className="col-7 d-flex align-items-center form-check">
                        <input type="checkbox" id="termos" placeholder="E-mail" className="form-check-input me-2" value="" />
                        <label className="form-check-label pt-1" htmlFor="termos">Aceitar Termos de Privacidade</label>
                    </div>

                </form>
            </div>
        </div>

    )
}