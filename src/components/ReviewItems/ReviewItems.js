import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    console.log(props);
    const {name, quantity, key,price} = props.product;
    const reviewItemStyle={
        borderBottom: "1px solid black",
        marginBottom: "5px",
        paddingBottom: "5px",



    };
    return (
        <div style={reviewItemStyle}  className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <br/>
            <button 
            className="buy-btn"
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;