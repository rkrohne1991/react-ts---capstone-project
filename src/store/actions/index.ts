import { ProductObject } from "../../state/shop-data";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: CurrentUser;
}

export interface SetCategoriesMap {
  type: CategoriesActionType.SET_CATEGORIES;
  payload: any;
  // payload: ProductObject;
}

export type Action = SetCurrentUserAction | SetCategoriesMap;
