import React from 'react';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <img src="/img/robtec.svg" alt="robtec-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navBar">
                        <div className="nav navbar-nav w-100 justify-content-around">
                            <a href="#banner" className="nav-link d-flex align-items-center">Home</a>
                            <a href="#sobre-nos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="#proposito" className="nav-link d-flex align-items-center">Propósito</a>
                            <a href="#solucoes" className="nav-link d-flex align-items-center">Soluções</a>
                            <a href="#fale-conosco" className="nav-link d-flex align-items-center">Fale Conosco</a>
                        </div>
                        <div id="btn-container">
                            <button className="btn rob-btn btn-outline-primary border-radius-0">Solicitar Orçamento</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}