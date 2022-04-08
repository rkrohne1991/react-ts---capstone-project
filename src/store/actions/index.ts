import { CategoriesActionType } from "../action-types/categoriesActionTypes";
import { UserActionType } from "../action-types/userActionTypes";
import { CartActionType } from "../action-types/cartActionTypes";
import { CurrentUser } from "../user";
import { CartItem } from "../../state/cartItem";
import { Product } from "../../state/product";
import { User } from "firebase/auth";

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: CurrentUser;
}

export interface CheckUserSession {
  type: UserActionType.CHECK_USER_SESSION;
}

export interface GoogleSignInStart {
  type: UserActionType.GOOGLE_SIGN_IN_START;
}

export interface EmailSignInStart {
  type: UserActionType.EMAIL_SIGN_IN_START;
  payload: { email: string; password: string };
}

export interface SignInSuccess {
  type: UserActionType.SIGN_IN_SUCCESS;
  payload: User | null;
}

export interface SignInFailed {
  type: UserActionType.SIGN_IN_FAILED;
  payload: unknown;
}

export interface SignInStart {
  type: UserActionType.SIGN_UP_START;
  payload: { email: string; password: string; displayName: Object | {} };
}

export interface SignUpSuccess {
  type: UserActionType.SIGN_UP_SUCCESS;
  payload: { user: User | null; additionalDetails: Object | {} };
}

export interface SignUpFailed {
  type: UserActionType.SIGN_UP_FAILED;
  payload: unknown;
}

export interface SignOutStart {
  type: UserActionType.SIGN_OUT_START;
}

export interface SignOutSuccess {
  type: UserActionType.SIGN_OUT_SUCCESS;
}

export interface SignOutFailed {
  type: UserActionType.SIGN_OUT_FAILED;
  payload: unknown;
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
  | CheckUserSession
  | GoogleSignInStart
  | EmailSignInStart
  | SignInSuccess
  | SignInFailed
  | SignInStart
  | SignUpSuccess
  | SignUpFailed
  | SignOutStart
  | SignOutSuccess
  | SignOutFailed
  | FetchCategoriesSuccess
  | FetchCategoriesStart
  | FetchCategoriesFailed
  | SetCartItemsAction
  | SetIsCartOpenAction;
