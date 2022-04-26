import { Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CategoriesActionType } from '../action-types/categoriesActionTypes';
import { Category } from '../types/categoryTypes';

export type FetchCategoriesStart =
  Action<CategoriesActionType.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CategoriesActionType.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CategoriesActionType.FETCH_CATEGORIES_FAILED,
  Error
>;
