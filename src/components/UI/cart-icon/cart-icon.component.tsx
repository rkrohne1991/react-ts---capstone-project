import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";

import classes from "./cart-icon.module.scss";

const CartIcon: React.FC = () => {
  return (
    <div className={classes["cart-icon-container"]}>
      <ShoppingIcon className={classes["shopping-icon"]} />
      <span className={classes["item-count"]}>0</span>
    </div>
  );
};

export default CartIcon;
