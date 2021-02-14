import React from 'react';
import vid from 'assets/img/cameras-vigilancia.mp4';

export default function DestaqueProduto() {
    return (
        <div className="row gy-5 banner-produto">
            <div className="col-12 col-sm-6 col-md-4 col-lg-8 d-flex">
                <div className="position-relative w-100">
                    <video src={vid} className="img-fluid w-100" muted autoPlay />
                    <div className="position-absolute bg-white text-center first-product-container p-3">
                        <span className="product-title d-block">Câmeras de Vigilância</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
                <div>
                    <p className="medium-17 mb-3">Aumente seu campo de visão <br /> e fique de olho em tudo.</p>
                    <p className="light-15 mb-3">Um produto que garante a sua segurança e <br /> tranquilidade. Linha completa e
                        Câmeras Wi-Fi, <br /> AHD, HDCVI, IP, Multi HD e Especiais.</p>
                    <span className="saiba-mais">Saiba Mais <span className="flecha">→</span></span>
                </div>
            </div>
        </div>
    )
}