import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/UI/spinner/spinner.component";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../hooks/categories-map-selector";
import { CategoryItem } from "../../store/types/categoryTypes";

import { CategoryContainer, Title } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category: React.FC = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const productsLayout = (
    <Fragment>
      <Title>{category?.toLocaleUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product: CategoryItem) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );

  const emptyLayout = <div />;

  return <Fragment>{products ? productsLayout : emptyLayout}</Fragment>;
};

export default Category;
