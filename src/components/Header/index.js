import React from "react";
import logo from 'assets/img/robtec.svg';

export default function Header() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <img src={logo} alt="robtec-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100 justify-content-around">
                            <a href="#banner" className="nav-link d-flex align-items-center">Home</a>
                            <a href="#sobreNos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="#solutions" className="nav-link d-flex align-items-center">Soluções</a>
                            <a href="#map-container" className="nav-link d-flex align-items-center">Onde Encontrar</a>
                            <a href="#faleConosco" className="nav-link d-flex align-items-center">Fale Conosco</a>
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