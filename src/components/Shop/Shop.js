import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) => {
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
        // add database to shop component
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        key = {pd.key}
                        showAddToCart={true} 
                        handleAddProduct={handleAddProduct} 
                        product={pd}>

                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>



    );
};

export default Shop;