import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name } = props.product;
    return (
        <div className="product">

            <div className="single-product">

                <div className="images">
                    <img src={img} alt="" />
                </div>
                <div className="details"></div>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Product;