import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

import classes from "./shop.module.scss";

const Shop: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className={classes["shop-container"]}>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
