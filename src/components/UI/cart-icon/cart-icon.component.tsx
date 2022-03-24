import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { CartContext } from "../../../contexts/cart.context";

import classes from "./cart-icon.module.scss";

const CartIcon: React.FC = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={classes["cart-icon-container"]} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={classes["shopping-icon"]} />
      <span className={classes["item-count"]}>0</span>
    </div>
  );
};

export default CartIcon;
