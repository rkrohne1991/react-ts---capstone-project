import { createSelector } from "reselect";

import { Categories } from "../state/categories";
import { RootState } from "../store/reducers";
import { Product } from "../state/product";

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice: any) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce(
      (acc: { [key: string]: Product[] }, category: Categories) => {
        const { title, items }: { title: string; items: Product[] } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {}
    )
);
