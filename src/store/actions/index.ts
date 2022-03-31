import { UserActionType } from "../action-types/userActionTypes";
import { CurrentUser } from "../user";

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: CurrentUser;
}

export type Action = SetCurrentUserAction;
