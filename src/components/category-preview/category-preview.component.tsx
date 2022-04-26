import React from 'react';

import { CategoryItem } from '../../store/types/categoryTypes';
import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  products,
}) => (
  <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product: CategoryItem) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
