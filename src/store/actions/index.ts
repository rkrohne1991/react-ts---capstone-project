// import { ProductObject } from "../../state/shop-data";
import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { UserActionType } from "../action-types/userActionTypes";
import { CartActionType } from "../action-types/cartActionTypes";
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

export interface SetCartItemsAction {
  type: CartActionType.SET_CART_ITEMS;
  payload: any;
}

export interface SetIsCartOpenAction {
  type: CartActionType.SET_IS_CART_OPEN;
  payload: any;
}

export type Action =
  | SetCurrentUserAction
  | SetCategoriesMap
  | SetCartItemsAction
  | SetIsCartOpenAction;
