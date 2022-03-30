import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.module";

const Shop: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
