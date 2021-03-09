import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    // remove product form cart
    const removeProduct = (productKey) =>{
        const newCart = cart.filter( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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
        <div className="container shop-container">
           
          <div className="product-container">
          {
                cart.map( pd => <ReviewItems 
                    removeProduct={removeProduct}
                    key = {pd.key}
                    product={pd}></ReviewItems>)
            }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    )

};

export default Review;