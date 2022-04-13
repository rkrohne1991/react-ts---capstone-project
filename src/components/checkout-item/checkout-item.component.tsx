import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../hooks/cart-selector";
import { CartItem } from "../../store/types/cartTypes";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/action-creators";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

type CheckoutItemProps = {
  checkoutItem: CartItem;
};

const CheckoutItem: React.FC<CheckoutItemProps> = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = checkoutItem;
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = (_: React.MouseEvent<HTMLDivElement>) => {
    dispatch(clearItemFromCart(cartItems, checkoutItem));
  };
  const addItemHandler = (_: React.MouseEvent<HTMLDivElement>) => {
    dispatch(addItemToCart(cartItems, checkoutItem));
  };
  const removeItemHandler = (_: React.MouseEvent<HTMLDivElement>) =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
