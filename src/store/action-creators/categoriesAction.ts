import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export const setCategoriesMap = (categoryMap: any) => ({
  type: CategoriesActionType.SET_CATEGORIES_MAP,
  payload: categoryMap,
});
