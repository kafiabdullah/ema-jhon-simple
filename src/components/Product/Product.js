import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Product(props) {
    console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">

            <div className="images">
                <img src={img} alt="" />
            </div>
            <div className="details">
                {/* add product details routing */}
                <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock-Order soon</small></p>
                {/* add react condition render to hide button on productDetails component */}
                {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)}
                    className="buy-btn"> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}

            </div>
        </div>
    );
}

export default Product;