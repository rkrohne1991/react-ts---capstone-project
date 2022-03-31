import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";

export const setCurrentUser = (user: CurrentUser) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
