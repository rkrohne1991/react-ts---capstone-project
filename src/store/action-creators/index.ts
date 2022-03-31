import { createAction } from "../../utils/reducer/reducer.utils";
import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";

// export const setCurrentUser = (user: CurrentUser) => {
//   createAction(UserActionType.SET_CURRENT_USER, user);
// };

export const setCurrentUser = (user: CurrentUser) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
