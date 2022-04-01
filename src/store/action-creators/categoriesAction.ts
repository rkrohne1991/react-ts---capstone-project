import { Categories } from "../../state/categories";
import { Category } from "../../state/category";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

// export const setCategories = (categories: any) => ({
//   // export const setCategories = (categories: Categories[]) => ({
//   type: CategoriesActionType.SET_CATEGORIES,
//   payload: categories,
//   // payload: categories,
// });

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "categories/SET_CATEGORIES_MAP",
  SET_CATEGORIES: "categories/SET_CATEGORIES",
};

export const createAction = (type: any, payload: any) => ({ type, payload });

export const setCategories = (categories: any) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
