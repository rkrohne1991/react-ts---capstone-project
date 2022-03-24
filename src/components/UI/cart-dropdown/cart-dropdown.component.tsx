import Button from "../button/button.component";

import classes from "./cart-dropdown.module.scss";

const CartDropdown: React.FC = () => {
  return (
    <div className={classes["cart-dropdown-container"]}>
      <div className={classes["cart-items"]}></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
