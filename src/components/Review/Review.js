import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // add product on cart to review
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;

        })
        setCart(cartProducts);
    }, []);

    return (
        <div className="container">
            <h1>This is review</h1>
            <h3>Cart Items: {cart.length}</h3>
        </div>
    )

};

export default Review;