import {
  takeLatest,
  all,
  call,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { Categories } from "../../state/categories";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../action-creators/categoriesAction";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

export function* fetchCategoriesAsync(): Generator<
  CallEffect | PutEffect,
  void,
  Categories[]
> {
  try {
    const categoriesArray: Categories[] = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error: unknown) {
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
