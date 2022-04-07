import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { Action } from "../actions";

export interface CategoriesState {
  categories: Categories[];
  isLoading: boolean;
  error: null;
}

const initalState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const reducer = (state: CategoriesState = initalState, action: Action) => {
  switch (action.type) {
    case CategoriesActionType.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CategoriesActionType.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false };
    case CategoriesActionType.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default reducer;
