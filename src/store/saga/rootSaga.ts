import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./categorySaga";
import { userSaga } from "./userSaga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)]);
}
