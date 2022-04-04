import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { Action } from "../actions";

interface CategoriesState {
  categories: Categories[];
}

const initalState: CategoriesState = {
  categories: [],
};

const reducer = (state: CategoriesState = initalState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesActionType.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
export default reducer;
