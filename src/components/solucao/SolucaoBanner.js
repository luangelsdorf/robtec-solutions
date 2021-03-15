import React from 'react';

export default function SolucaoBanner(props) {
    return (
        <div className="container-fluid p-0 position-relative" id="banner-produto">
            <img src={`/img/banner-seguranca-eletronica.jpg`} className="banner-img" id="banner-produto-img" alt="banner do produto" />
            <section className="container position-absolute d-flex align-items-center banner-section" id="banner-produto-section">
                <div className="bold-60" id="banner-produto-text">
                    <span className="bold bg-white">Segurança <br /> Eletrônica</span>
                </div>
            </section>
        </div>
    )
}