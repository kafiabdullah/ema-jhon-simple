import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // total price calculation
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;

    }
    // shipping cost
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }

    else if (totalPrice > 0) {
        shipping = 12.99;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    let tax = (totalPrice / 10).toFixed(2);
    let grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)

    }
    return (
        <div className="cart-details">
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Item Cost: {formatNumber(totalPrice)}</p>
            <p>Shipping Cost:   {shipping} </p>
            <p>Tax + VAT: {tax}</p>
            <h5>Total Price:    {grandTotal}</h5>
            <br />
            <Link to="/review">
            <button className="buy-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;