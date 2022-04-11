import {
  takeLatest,
  all,
  call,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../action-creators/categoriesAction";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export function* fetchCategoriesAsync(): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error: any) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CategoriesActionType.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
