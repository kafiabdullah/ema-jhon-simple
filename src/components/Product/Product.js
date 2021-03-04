import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function Product(props) {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">

            <div className="images">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
                <button className="buy-btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>
        </div>
    );
}

export default Product;