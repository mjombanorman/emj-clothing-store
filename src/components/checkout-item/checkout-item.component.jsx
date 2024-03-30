import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
            <img src={imageUrl}  alt="item" />
    </div>
        <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => alert("decrement")}>
        &#10094;
      </div>
            <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => alert("increment")}>
        &#10095;
      </div>
    </span>
    <span className="price">${price}</span>
    <div className="remove-button" onClick={() => alert("remove item")}>
      &#10005;
    </div>
  </div>
);

export default CheckoutItem;
