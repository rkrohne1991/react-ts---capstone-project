import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export const fetchCategoriesSuccess = (categories: Categories[]) => ({
  type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesStart = (boolean: boolean) => ({
  type: CategoriesActionType.FETCH_CATEGORIES_START,
  payload: boolean,
});

export const fetchCategoriesFailed = (error: Error) => ({
  type: CategoriesActionType.FETCH_CATEGORIES_FAILED,
  payload: error,
});
