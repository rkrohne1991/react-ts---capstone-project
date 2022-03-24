import { Product } from "../../state/product";
import Button from "../UI/button/button.component";

import classes from "./product-card.module.scss";

const ProductCard: React.FC<Product> = ({ id, name, imageUrl, price }) => (
  <div className={classes["product-card-container"]}>
    <img src={imageUrl} alt={name} />
    <div className={classes["footer"]}>
      <span className={classes["name"]}>{name}</span>
      <span className={classes["price"]}>{price}</span>
    </div>
    <Button buttonType="inverted">Add to cart</Button>
  </div>
);
export default ProductCard;
