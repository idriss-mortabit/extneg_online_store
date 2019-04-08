import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";
import './productDetail.css'
const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        price,
        cpu,
        camera,
        size,
        weight,
        display,
        battery,
        memory,
        description,
        id
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
	<span className="price h3 text-warning">
    <span className="num">{formatMoney(price)}</span><span className="currency"> Dhs</span>
	</span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Type</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Couleur</dt>
                    <dd>{size}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Longeur</dt>
                    <dd>{camera}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Largeur</dt>
                    <dd>{cpu}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Tissu</dt>
                    <dd>{memory}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Type de Bordure</dt>
                    <dd>{display}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Poids</dt>
                    <dd>{battery}</dd>
                </dl>
                <hr/>
                <hr/>
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Add to cart
                </button>
                <a href='https://wa.me/212669383470' className='float-whats nav-link'><i className="fa fa-whatsapp"></i></a>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
