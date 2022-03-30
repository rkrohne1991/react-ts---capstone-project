import { CartItem as CartItemState } from "../../state/cartItem";

import { CartItemContainer, ItemDetails } from "./cart-item.styles";

interface CartItemProps {
  cartItem: CartItemState;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
