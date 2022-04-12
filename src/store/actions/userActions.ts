import { User } from "firebase/auth";

import {
  AdditionalInformation,
  UserData,
} from "../../utils/firebase/firebase.utils";
import { Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { UserActionType } from "../action-types/userActionTypes";

export type CheckUserSession = Action<UserActionType.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<
  UserActionType.SET_CURRENT_USER,
  UserData
>;

export type GoogleSignInStart = Action<UserActionType.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  UserActionType.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  UserActionType.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  UserActionType.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = ActionWithPayload<
  UserActionType.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  UserActionType.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  UserActionType.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<UserActionType.SIGN_OUT_START>;

export type SignOutSuccess = Action<UserActionType.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  UserActionType.SIGN_OUT_FAILED,
  Error
>;
