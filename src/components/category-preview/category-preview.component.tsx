import { Product } from "../../state/product";
import ProductCard from "../product-card/product-card.component";

import classes from "./category-preview.module.scss";

interface CategoryPreviewProps {
  title: string;
  products: Product[];
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => {
  return (
    <div className={classes["category-preview-container"]}>
      <h2>
        <span className={classes["title"]}>{title}</span>
      </h2>
      <div className={classes["preview"]}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
