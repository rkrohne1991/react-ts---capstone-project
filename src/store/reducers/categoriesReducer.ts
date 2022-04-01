import { Categories } from "../../state/categories";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { Action } from "../actions";

// interface CategoriesState {
//   // categories: Categories[];
//   categories: any;
// }

// const initalState: CategoriesState = {
//   categories: [],
// };

// // const reducer = (state: CategoriesState = initalState, action: Action) => {
// const reducer = (state: any = initalState, action: any) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CategoriesActionType.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };

// export default reducer;

const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "categories/SET_CATEGORIES_MAP",
  SET_CATEGORIES: "categories/SET_CATEGORIES",
};

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

const reducer = (state = CATEGORIES_INITIAL_STATE, action: any = {}) => {
  const { type, payload }: { type: any; payload: any } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
export default reducer;
