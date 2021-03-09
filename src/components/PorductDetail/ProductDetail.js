import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productKey} = useParams();
    const product= fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div className="container">
            
            {/* add product details form product component */}
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;