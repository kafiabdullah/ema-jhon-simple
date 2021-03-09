import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    console.log(props);
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom: "1px solid black",
        marginBottom: "5px",
        paddingBottom: "5px",
        


    };
    return (
        <div style={reviewItemStyle}  className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="buy-btn">Remove</button>
        </div>
    );
};

export default ReviewItems;