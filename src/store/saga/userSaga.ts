import { User, UserCredential } from "firebase/auth";
// import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "../action-creators";
import { UserActionType } from "../action-types/userActionTypes";

export function* getSnapshotFromUserAuth(
  userAuth: any,
  additionalDetails: Object = {}
): Generator<any, any, any> {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error: unknown) {
    yield put(signInFailed(error as any));
  }
}

export function* signInWithGoogle(): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const { user }: { user: UserCredential | undefined } = yield call(
      signInWithGooglePopup
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error: unknown) {
    yield put(signInFailed(error as any));
  }
}

export function* signInWithEmail(
  payload: any
): Generator<CallEffect | PutEffect, void, any> {
  const { email, password }: { email: string; password: string } =
    payload.payload;

  try {
    const { user }: { user: UserCredential | undefined } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error: unknown) {
    yield put(signInFailed(error as any));
  }
}

export function* isUserAuthenticated(): Generator<
  CallEffect | PutEffect,
  void,
  any
> {
  try {
    const userAuth: User | null = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error: unknown) {
    yield put(signInFailed(error as any));
  }
}

export function* signUp(
  payload: any
): Generator<CallEffect | PutEffect, void, any> {
  const {
    email,
    password,
    displayName,
  }: { email: string; password: string; displayName: string } = payload.payload;
  try {
    const { user }: { user: UserCredential | undefined } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user as any, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error as any));
  }
}

export function* signOut(): Generator<CallEffect | PutEffect, void, any> {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error: unknown) {
    yield put(signOutFailed(error as any));
  }
}

export function* signInAfterSignUp(payload: any) {
  const {
    user,
    additionalDetails,
  }: { user: User | null; additionalDetails: Object | {} } = payload.payload;
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionType.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionType.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionType.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
