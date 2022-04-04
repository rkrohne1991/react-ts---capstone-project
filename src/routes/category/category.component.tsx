import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../hooks/categories-map-selector";
import { Product } from "../../state/product";

import { CategoryContainer, Title } from "./category.styles";

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log("rendering category");
  const [products, setProducts] = useState<Product[]>(
    category && categoriesMap[category]
  );

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const productsLayout = (
    <Fragment>
      <Title>{category?.toLocaleUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );

  const emptyLayout = <div />;

  return <Fragment>{products ? productsLayout : emptyLayout}</Fragment>;
};

export default Category;
