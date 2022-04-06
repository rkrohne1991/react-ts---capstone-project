import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export const fetchCategoriesStart = () => ({
  type: CategoriesActionType.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categoriesArray: Categories[]) => ({
  type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailed = (error: unknown) => ({
  type: CategoriesActionType.FETCH_CATEGORIES_FAILED,
  payload: error,
});
