import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppContextInterface,
  CartContext,
} from "../../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

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
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
