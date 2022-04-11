import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";
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
  | SignOutFailed;
