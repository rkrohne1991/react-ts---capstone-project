import classes from "./cart-item.module.scss";

interface CartItemProps {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className={classes["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes["item-details"]}>
        <span className={classes["name"]}>{name}</span>
        <span className={classes["price"]}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
