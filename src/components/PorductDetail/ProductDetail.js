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
            <h2>{productKey} Details Comming Soon....</h2>
            {/* add product details form product component */}
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetail;