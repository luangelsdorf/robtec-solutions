import React from "react";
import logo from 'assets/img/robtec.svg';

export default function Header() {
    return (
        /*<header className="container-fluid d-flex align-items-center p-0 bg-white">
            <nav className="container navbar navbar-expand-xl navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="robtec-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapseContent" id="toggler-button">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapseContent">
                    <div className="navbar-nav">
                        <a href="#banner" className="nav-link">Home</a>
                        <a href="#sobreNos" className="nav-link">Sobre Nós</a>
                        <a href="#solutions" className="nav-link">Soluções</a>
                        <a href="#mapContainer" className="nav-link">Onde Encontrar</a>
                        <a href="#faleConosco" className="nav-link">Fale Conosco</a>
                        <button className="btn rob-btn btn-outline-primary fira-sans border-radius-0">
                            Solicitar Orçamento
                        </button>
                    </div>
                </div>
            </nav>
        </header>*/

        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt="robtec-logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100 justify-content-around">
                            <a href="#banner" className="nav-link d-flex align-items-center">Home</a>
                            <a href="#sobreNos" className="nav-link d-flex align-items-center">Sobre Nós</a>
                            <a href="#solutions" className="nav-link d-flex align-items-center">Soluções</a>
                            <a href="#mapContainer" className="nav-link d-flex align-items-center">Onde Encontrar</a>
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