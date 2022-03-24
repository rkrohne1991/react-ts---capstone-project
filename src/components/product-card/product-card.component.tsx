import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Product } from "../../state/product";
import Button from "../UI/button/button.component";

import classes from "./product-card.module.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = (_: React.MouseEvent<HTMLButtonElement>) =>
    addItemToCart(product);

  return (
    <div className={classes["product-card-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={classes["footer"]}>
        <span className={classes["name"]}>{name}</span>
        <span className={classes["price"]}>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
