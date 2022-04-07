import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categorySaga";
import { userSaga } from "./userSaga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
