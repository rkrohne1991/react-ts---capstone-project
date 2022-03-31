import { ProductObject } from "../../state/shop-data";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";

interface CategoriesState {
  categoriesMap: ProductObject;
}

const initalState: CategoriesState = {
  categoriesMap: {},
};

const reducer = (state: CategoriesState = initalState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CategoriesActionType.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

export default reducer;
