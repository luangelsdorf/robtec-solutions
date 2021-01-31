import React from 'react';
import bannerImg from 'assets/img/banner.svg'

export default function () {
    return (
        <section className="position-relative">
            <img src={bannerImg} id="banner-img" className="img-fluid" alt="banner" />
                <div className="row position-absolute w-100" id="banner-text">
                    <div className="col-3 d-none d-xl-block" />
                    <div className="col-xl-9 ps-xl-0" id="banner-text-col">
                        <span className="bold">Fornecemos as <br /> Melhores Soluções <br /> </span>
                        <button className="btn btn-primary border-radius-0" style={{marginRight: 20 + 'px'}}>Nossos Serviços</button>
                        <button className="btn btn-outline-primary btn-contatos border-radius-0">Contatos</button>
                    </div>
                </div>
        </section>
    )
}