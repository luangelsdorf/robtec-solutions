import React from "react";
import logo from 'assets/img/robtec.svg';

export default function () {
    return (
        <header className="bg-white d-flex w-100">
            <nav className="navbar navbar-expand-xl navbar-light row m-0 w-100">
                <div className="col-xl-3 d-flex justify-content-between justify-content-xl-end">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="robtec-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapseContent" id="toggler-button">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
                <div className="col-xl-6 d-flex justify-content-center">
                    <div className="collapse navbar-collapse navbar-nav w-100 justify-content-evenly"
                         id="navbarCollapseContent">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">Sobre Nós</a>
                        <a href="#" className="nav-link">Soluções</a>
                        <a href="#" className="nav-link">Onde Encontrar</a>
                        <a href="#" className="nav-link">Fale Conosco</a>
                    </div>
                </div>
                <div className="col-3 d-flex justify-content-start d-none d-xl-block">
                    <div>
                        <button className="btn btn-outline-primary fira-sans border-radius-0">Solicitar Orçamento
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}