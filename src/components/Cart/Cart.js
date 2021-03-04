import React from 'react';
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
    let shipping = 12.99;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }

    return (
        <div className="cart-details">
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Shipping Cost:   {shipping} </p>
            <h5>Total Price:    {totalPrice + shipping}</h5>
        </div>
    );
};

export default Cart;