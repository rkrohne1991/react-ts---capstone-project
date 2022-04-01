import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export const setCategories = (categories: Categories[]) => ({
  type: CategoriesActionType.SET_CATEGORIES,
  payload: categories,
});
