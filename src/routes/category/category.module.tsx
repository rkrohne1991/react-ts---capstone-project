import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import { Product } from "../../state/product";

import classes from "./category.module.scss";

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className={classes["category-container"]}>
      {products &&
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
