import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(first10);
    // add calculation method on review component
    useEffect( () =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;

        })
        setCart(previousCart);
    }, [])
    const handleAddProduct = (product) => {
        // console.log("product added", product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        const count =1;
        let newCart;
        if(sameProduct){
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart =[...cart, product];
        }
        
        setCart(newCart);
        // add database to shop component
        
        
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