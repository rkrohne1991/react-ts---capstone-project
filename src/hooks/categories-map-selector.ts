import { Categories } from "../state/categories";
import { RootState } from "../store/reducers";

export const selectCategoriesMap = (state: any) => {
  const categoriesMap = state.categories.categories.reduce(
    (acc: any, { title, items }: { title: any; items: any }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};
