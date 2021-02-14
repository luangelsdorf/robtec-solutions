import React from "react";
import logo from 'assets/img/robtec.svg';
import { HashLink } from "react-router-hash-link";

export default function Header() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <img src={logo} alt="robtec-logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navBar">
                        <div className="nav navbar-nav w-100 justify-content-around">
                            <HashLink to="/#banner" className="nav-link d-flex align-items-center">Home</HashLink>
                            <HashLink to="/#sobre-nos" className="nav-link d-flex align-items-center">Sobre Nós</HashLink>
                            <HashLink to="/#proposito" className="nav-link d-flex align-items-center">Propósito</HashLink>
                            <HashLink to="/#solucoes" className="nav-link d-flex align-items-center">Soluções</HashLink>
                            <HashLink to="/#fale-conosco" className="nav-link d-flex align-items-center">Fale Conosco</HashLink>
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