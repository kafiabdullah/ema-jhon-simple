import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(first10);
    const handleAddProduct = (product) =>{
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (



        <div className="shop-container container">


            <div className="product-container">

              
                <ul>
                    {
                        products.map(pd => <Product showAddToCart={true} handleAddProduct={handleAddProduct} product={pd}></Product>)
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>



    );
};

export default Shop;