import React from 'react';
import bannerImg from 'assets/img/banner.svg'

export default function () {
    return (
        <div className="container-fluid p-0 position-relative">
            <img src={bannerImg} id="banner-img" alt="banner" />
            <section className="container position-absolute h-100 d-flex align-items-center">
                <div className="" id="banner-text">
                    <span className="bold">Fornecemos as <br /> Melhores Soluções <br /> </span>
                    <button className="btn btn-primary border-radius-0" style={{marginRight: 20 + 'px'}}>Nossos Serviços</button>
                    <button className="btn btn-outline-primary btn-contatos border-radius-0">Contatos</button>
                </div>
            </section>
        </div>
    )
}