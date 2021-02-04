import React from "react";
import logo from 'assets/img/robtec.svg';

export default function Header() {
    return (
        <header className="container-fluid d-flex align-items-center p-0 bg-white">
            <div className="container bg-white d-flex w-100">
                <nav className="navbar navbar-expand-xl navbar-light d-flex m-0 w-100">
                    <div className="d-flex d-xl-block justify-content-between">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="robtec-logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapseContent" id="toggler-button">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="flex-grow-1 justify-content-center">
                        <div className="collapse navbar-collapse navbar-nav w-100 justify-content-evenly"
                             id="navbarCollapseContent">
                            <a href="#banner" className="nav-link">Home</a>
                            <a href="#sobreNos" className="nav-link">Sobre Nós</a>
                            <a href="#solutions" className="nav-link">Soluções</a>
                            <a href="#mapContainer" className="nav-link">Onde Encontrar</a>
                            <a href="#faleConosco" className="nav-link">Fale Conosco</a>
                        </div>
                    </div>
                    <div className="d-none d-xl-block">
                        <button className="btn rob-btn btn-outline-primary fira-sans border-radius-0">
                            Solicitar Orçamento
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}