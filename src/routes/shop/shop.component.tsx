import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { ProductContext } from "../../contexts/products.context";

import classes from ".//shop.module.scss";

const Shop: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className={classes["products-container"]}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
