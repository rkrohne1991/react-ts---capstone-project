import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import {
  FetchCategoriesFailed,
  FetchCategoriesStart,
  FetchCategoriesSuccess,
} from "../actions/categoriesActions";
import { Category } from "../types/categoryTypes";

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CategoriesActionType.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CategoriesActionType.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CategoriesActionType.FETCH_CATEGORIES_FAILED, error)
);
