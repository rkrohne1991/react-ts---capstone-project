import { RootState } from "../store/reducers";

export const selectCategoriesMap = (state: RootState) =>
  state.categories.categoriesMap;
