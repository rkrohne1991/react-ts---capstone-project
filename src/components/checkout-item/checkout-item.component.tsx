import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartItem } from "../../state/cartItem";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrementItemHandler(checkoutItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementItemHandler(checkoutItem)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler(checkoutItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
