import React from 'react';
import bannerProdutoImg from "assets/img/bannerAlarmes.jpg";

export default function BannerProduto() {
    return (
        <div className="container-fluid p-0 position-relative" id="banner-produto">
            <img src={bannerProdutoImg} className="banner-img" id="banner-produto-img" alt="banner do produto" />
            <section className="container position-absolute d-flex align-items-center">
                <div className="bold-60" id="banner-produto-text">
                    <span className="bold bg-white">Segurança <br /> Eletrônica <br /> </span>
                </div>
            </section>
        </div>
    )
}