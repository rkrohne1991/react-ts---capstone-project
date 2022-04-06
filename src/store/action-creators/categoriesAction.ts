import { Dispatch } from "redux";

import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

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

export const fetchCategoriesAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error: unknown) {
    dispatch(fetchCategoriesFailed(error));
  }
};
