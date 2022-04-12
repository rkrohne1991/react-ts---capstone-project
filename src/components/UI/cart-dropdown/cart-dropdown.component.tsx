import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button, { ButtonTypeClasses } from "../button/button.component";
import CartItem from "../../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import { selectCartItems } from "../../../hooks/cart-selector";

const CartDropdown: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: any) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={ButtonTypeClasses.base} onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
