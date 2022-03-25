import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../state/cartItem";
import classes from "./checkout-item.module.scss";

interface CheckoutItemProps {
  checkoutItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler =
    (cartItem: CartItem) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      clearItemFromCart(cartItem);
    };

  const incrementItemHandler =
    (cartItem: CartItem) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      addItemToCart(cartItem);
    };

  const decrementItemHandler =
    (cartItem: CartItem) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      removeItemFromCart(cartItem);
    };

  return (
    <div className={classes["checkout-item-container"]}>
      <div className={classes["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={classes["name"]}>{name}</div>
      <div className={classes["quantity"]}>
        <span
          className={classes["arrow"]}
          onClick={decrementItemHandler(checkoutItem)}
        >
          &#10094;
        </span>
        <span className={classes["value"]}>{quantity}</span>
        <span
          className={classes["arrow"]}
          onClick={incrementItemHandler(checkoutItem)}
        >
          &#10095;
        </span>
      </div>
      <div className={classes["price"]}>${price}</div>
      <div
        className={classes["remove-button"]}
        onClick={clearItemHandler(checkoutItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
