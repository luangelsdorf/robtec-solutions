import React from 'react';
import bannerImg from 'assets/img/banner.svg'
import detalhe1 from 'assets/img/detalhe-1.svg';
import detalhe2 from 'assets/img/detalhe-2.svg';

export default function Banner() {
    return (
        <div className="container-fluid p-0 position-relative">
            {/*<img src={detalhe1} alt="detalhe" className="position-absolute" id="detalhe-1" />*/}
            {/*<img src={detalhe2} alt="detalhe" className="position-absolute" id="detalhe-2" />*/}
            <img src={bannerImg} id="banner-img" alt="banner" />
            <section className="container position-absolute h-100 d-flex align-items-center">
                <div className="" id="banner-text">
                    <span className="bold">Fornecemos as <br /> Melhores Soluções <br /> </span>
                    <button className="btn rob-btn btn-primary border-radius-0" style={{marginRight: 20 + 'px'}}>Nossos Serviços</button>
                    <button className="btn rob-btn btn-outline-primary btn-contatos border-radius-0">Contatos</button>
                </div>
            </section>
        </div>
    )
}