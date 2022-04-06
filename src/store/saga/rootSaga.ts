import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categorySaga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
