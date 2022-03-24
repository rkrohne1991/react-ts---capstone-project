import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/products.context";

import classes from ".//shop.module.scss";

const Shop: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className={classes["products-container"]}>
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
        />
      ))}
    </div>
  );
};

export default Shop;
