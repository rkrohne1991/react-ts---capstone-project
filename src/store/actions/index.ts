import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { UserActionType } from "../action-types/userActionTypes";
import { CartActionType } from "../action-types/cartActionTypes";
import { CurrentUser } from "../user";
import { CartItem } from "../../state/cartItem";
import { Product } from "../../state/product";

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: CurrentUser;
}

export interface FetchCategoriesSuccess {
  type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS;
  payload: Product[];
}

export interface FetchCategoriesStart {
  type: CategoriesActionType.FETCH_CATEGORIES_START;
  payload: Product[];
}

export interface FetchCategoriesFailed {
  type: CategoriesActionType.FETCH_CATEGORIES_FAILED;
  payload: Product[];
}

export interface SetCartItemsAction {
  type: CartActionType.SET_CART_ITEMS;
  payload: CartItem[];
}

export interface SetIsCartOpenAction {
  type: CartActionType.SET_IS_CART_OPEN;
  payload: boolean;
}

export type Action =
  | SetCurrentUserAction
  | FetchCategoriesSuccess
  | FetchCategoriesStart
  | FetchCategoriesFailed
  | SetCartItemsAction
  | SetIsCartOpenAction;
