import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Product/Product'



const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (

        <div className="container">

           <div className="shop-container">


                <div className="product-container">

                    <h1>This is Product</h1>
                    <ul>
                        {
                            products.map(pd => <Product product={pd}></Product>)
                        }
                    </ul>
                </div>

                <div className="cart-container">
                    <h1>This is cart</h1>
                </div>

            </div>
        </div>



    );
};

export default Shop;