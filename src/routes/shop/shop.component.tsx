import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import { Product } from "../../state/shop-data";

import classes from ".//shop.module.scss";

const Shop: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => {
          return (
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className={classes["products-container"]}>
                {categoriesMap[title].map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Fragment>
          );
        })}
    </Fragment>
  );
};

export default Shop;
