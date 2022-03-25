import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import classes from "./checkout.module.scss";

const Checkout: React.FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={classes["checkout-container"]}>
      <div className={classes["checkout-header"]}>
        <div className={classes["header-block"]}>
          <span>Product</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Description</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Price</span>
        </div>
        <div className={classes["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} checkoutItem={cartItem} />
      ))}
      <span className={classes["total"]}>Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
