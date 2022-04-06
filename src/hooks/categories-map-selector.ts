import { createSelector } from "reselect";

import { Categories } from "../state/categories";
import { RootState } from "../store/reducers";
import { Product } from "../state/product";
import { CategoriesState } from "../store/reducers/categoriesReducer";

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice: CategoriesState) =>
    categoriesSlice.categories as Categories[]
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

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice: CategoriesState) => {
    return categoriesSlice.isLoading as boolean;
  }
);
