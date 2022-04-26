import { AnyAction } from 'redux';

import { Category } from '../types/categoryTypes';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../action-creators/categoriesAction';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const initalState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const reducer = (
  action: AnyAction,
  state: CategoriesState = initalState,
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
export default reducer;
