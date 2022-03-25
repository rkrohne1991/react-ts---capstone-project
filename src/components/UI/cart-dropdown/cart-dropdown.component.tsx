import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppContextInterface,
  CartContext,
} from "../../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../../cart-item/cart-item.component";

import classes from "./cart-dropdown.module.scss";
import { CartItem as CartItemElement } from "../../../state/cartItem";

const CartDropdown: React.FC = () => {
  const { cartItems }: { cartItems: CartItemElement[] | [] } =
    useContext<AppContextInterface>(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className={classes["cart-dropdown-container"]}>
      <div className={classes["cart-items"]}>
        {cartItems.map((item: CartItemElement) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
