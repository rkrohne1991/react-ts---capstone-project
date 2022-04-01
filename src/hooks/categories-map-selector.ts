import { Categories } from "../state/categories";
import { RootState } from "../store/reducers";
import { Product } from "../state/product";

export const selectCategoriesMap = (state: RootState) => {
  const categoriesMap = state.categories.categories.reduce(
    (acc: { [key: string]: Product[] }, category: Categories) => {
      const { title, items }: { title: string; items: Product[] } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};
