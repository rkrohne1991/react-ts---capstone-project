import {
  takeLatest, all, call, put,
} from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from '../action-creators/categoriesAction';
import { CategoriesActionType } from '../action-types/categoriesActionTypes';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CategoriesActionType.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
