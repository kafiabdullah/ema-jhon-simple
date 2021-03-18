import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImages from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();
    const handleProceedCheckout = () =>{
        history.push('/shipment')
       
    }
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
    let thankYou ;
    if(orderPlaced){
        thankYou= <img src={happyImages} alt=""/>
    }
    return (
        <div className="container shop-container">
           
          <div className="product-container">
          {
                cart.map( pd => <ReviewItems 
                    removeProduct={removeProduct}
                    key = {pd.key}
                    product={pd}></ReviewItems>)
            }
            {thankYou }
          </div>
          <div className="cart-container">
              <Cart cart={cart}>
                  <button 
                  onClick={handleProceedCheckout}
                  className="buy-btn"> Proceed Checkout</button>
              </Cart>
          </div>
        </div>
    )

};

export default Review;