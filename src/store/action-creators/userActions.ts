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

export const emailSignInStart = (email: any, password: any) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user: any) => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error: any) => ({
  type: UserActionType.SIGN_IN_FAILED,
  payload: error,
});

export const signUpStart = (email: any, password: any, displayName: any) => ({
  type: UserActionType.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = (user: any, additionalDetails: any) => ({
  type: UserActionType.SIGN_UP_SUCCESS,
  payload: { user, additionalDetails },
});

export const signUpFailed = (error: any) => ({
  type: UserActionType.SIGN_UP_FAILED,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error: any) => ({
  type: UserActionType.SIGN_OUT_FAILED,
  payload: error,
});
