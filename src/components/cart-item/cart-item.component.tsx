import { CartItem as CartItemType } from "../../store/types/cartTypes";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProps = {
  cartItem: CartItemType;
};

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
