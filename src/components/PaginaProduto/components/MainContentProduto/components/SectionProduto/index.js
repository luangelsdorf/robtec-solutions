import React from 'react';

export default function SectionProduto(props) {
    return (
        <div className="row section">
            <div className={`col-6 order-${props.order}`}>
                <img src={require(`assets/img/seguranca-eletronica/${props.img}.jpg`).default} alt={props.heading} className="img-fluid" />
            </div>
            <div className="col-6 d-flex align-items-center">
                <div>
                    <h1 className="bold-60 product-heading">{props.heading}</h1>
                    <p className="light-15 mb-3">{props.description}</p>
                    <button className="btn rob-btn btn-outline-primary border-radius-0">
                        Download do Catálogo
                    </button>
                </div>
            </div>
        </div>
    )
}