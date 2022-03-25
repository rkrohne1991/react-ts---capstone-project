import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../state/cartItem";

import classes from "./checkout.module.scss";

const Checkout: React.FC = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const incrementHandler =
    (cartItem: CartItem) => (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      addItemToCart(cartItem);
    };

  const decrementHandler =
    (cartItem: CartItem) => (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      removeItemFromCart(cartItem)
    };

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={decrementHandler(cartItem)}>decrement</span>
              <br />
              <span onClick={incrementHandler(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
