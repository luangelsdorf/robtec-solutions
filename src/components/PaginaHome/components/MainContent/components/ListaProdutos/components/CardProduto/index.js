import React from 'react';

export default function CardProduto(props) {
    return (
        <div className="position-relative w-100">
            <img className="img-fluid w-100" src={require(`assets/img/${props.imgSrc}.png`).default} alt={props.displayText} />
            <div className="position-absolute overlay" />
            <div className="position-absolute bg-white text-center product-container">
                <span className="product-title d-block">{props.displayText}</span>
                <span className="saiba-mais d-inline-block">Saiba Mais <span className="flecha">→</span></span>
            </div>
        </div>
    )
}