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
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    let tax = (totalPrice / 10).toFixed(2);
    let grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div className="cart-details">
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Item Cost: {totalPrice}</p>
            <p>Shipping Cost:   {shipping} </p>
            <p>Tax + VAT: {tax}</p>
            <h5>Total Price:    {grandTotal}</h5>
        </div>
    );
};

export default Cart;