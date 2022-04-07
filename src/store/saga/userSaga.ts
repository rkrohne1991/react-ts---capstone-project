import { User } from "firebase/auth";
import {
  all,
  call,
  // CallEffect,
  put,
  // PutEffect,
  takeLatest,
} from "redux-saga/effects";

import {
  createUserDocumentFromAuth,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";
import { signInFailed, signInSuccess } from "../action-creators";
import { UserActionType } from "../action-types/userActionTypes";

export function* getSnapshotFromUserAuth(
  userAuth: any,
  additionalDetails: any
): Generator<any, any, any> {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    console.log(userSnapshot);
    console.log(userSnapshot.data());
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated(): Generator<any, any, any> {
  try {
    const userAuth: User | null = yield call(getCurrentUser);

    console.log(userAuth);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth as any, userAuth);
    // yield put(signInSuccess(userAuth));
  } catch (error: unknown) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
