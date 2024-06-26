import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Cart</h1>
      {Object.keys(cart).map((key) => (
        <div key={key}>
          <h3>{cart[key].title}</h3>
          <p>
            Price: {cart[key].price.currency} {cart[key].price.value} (Discount:{" "}
            {cart[key].price.discount})
          </p>
          <p>Quantity: {cart[key].quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
