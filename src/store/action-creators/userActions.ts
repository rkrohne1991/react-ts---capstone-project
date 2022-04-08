import { User, UserCredential } from "firebase/auth";
import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";

export const setCurrentUser = (user: CurrentUser) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: UserActionType.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (email: string, password: string) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user: User | null) => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error: unknown) => ({
  type: UserActionType.SIGN_IN_FAILED,
  payload: error,
});

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) => ({
  type: UserActionType.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = (
  user: UserCredential | undefined,
  additionalDetails: Object = {}
) => ({
  type: UserActionType.SIGN_UP_SUCCESS,
  payload: { user, additionalDetails },
});

export const signUpFailed = (error: unknown) => ({
  type: UserActionType.SIGN_UP_FAILED,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error: unknown) => ({
  type: UserActionType.SIGN_OUT_FAILED,
  payload: error,
});
