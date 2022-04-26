import { User } from 'firebase/auth';

import { UserActionType } from '../action-types/userActionTypes';
import { withMatcher, createAction } from '../../utils/reducer/reducer.utils';
import {
  CheckUserSession,
  EmailSignInStart,
  GoogleSignInStart,
  SetCurrentUser,
  SignInFailed,
  SignInSuccess,
  SignOutFailed,
  SignOutStart,
  SignOutSuccess,
  SignUpFailed,
  SignUpStart,
  SignUpSuccess,
} from '../actions/userActions';
import {
  AdditionalInformation,
  UserData,
} from '../../utils/firebase/firebase.utils';

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionType.CHECK_USER_SESSION),
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser => createAction(UserActionType.SET_CURRENT_USER, user),
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(UserActionType.GOOGLE_SIGN_IN_START),
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => createAction(UserActionType.EMAIL_SIGN_IN_START, { email, password }),
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess => createAction(UserActionType.SIGN_IN_SUCCESS, user),
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed => createAction(UserActionType.SIGN_IN_FAILED, error),
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => createAction(UserActionType.SIGN_UP_START, { email, password, displayName }),
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess => createAction(UserActionType.SIGN_UP_SUCCESS, { user, additionalDetails }),
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => createAction(UserActionType.SIGN_UP_FAILED, error),
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(UserActionType.SIGN_OUT_START),
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(UserActionType.SIGN_OUT_SUCCESS),
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed => createAction(UserActionType.SIGN_OUT_FAILED, error),
);
