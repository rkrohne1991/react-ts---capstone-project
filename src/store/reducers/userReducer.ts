import { UserActionType } from "../action-types/userActionTypes";
import { Action } from "../actions";
import { CurrentUser } from "../user";

interface UserState {
  currentUser: CurrentUser;
}

const initialState: UserState = {
  currentUser: null,
};

const reducer = (state: UserState = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default reducer;
