import classes from "./cart-item.module.scss";

interface CartItemProps {
  cartItem: {
    name: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
