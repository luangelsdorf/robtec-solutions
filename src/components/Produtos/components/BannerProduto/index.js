import React from 'react';
import img from 'assets/img/cameras_de_vigilancia.svg';

export default function BannerProduto() {
    return ([
        <div className="col-12 col-sm-6 col-md-4 col-lg-8 d-flex">
            <div className="position-relative w-100">
                <img src={img} className="img-fluid w-100" alt="cameras-de-vigilancia" />
                <div className="position-absolute bg-white text-center first-product-container p-3">
                    <span className="product-title d-block">Câmeras de Vigilância</span>
                </div>
            </div>
        </div>,
        <div className="col-lg-4 d-flex align-items-center">
            <div>
                <p className="medium-17 mb-3">Aumente seu campo de visão e fique de olho em tudo.</p>
                <p className="light-15 mb-3">Um produto que garante a sua segurança e tranquilidade. Linha completa e
                    Câmeras Wi-Fi, AHD, HDCVI, IP, Multi HD e Especiais.</p>
                <span className="saiba-mais">Saiba Mais →</span>
            </div>
        </div>
    ])
}