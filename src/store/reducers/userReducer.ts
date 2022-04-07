import { UserActionType } from "../action-types/userActionTypes";
import { Action } from "../actions";
import { CurrentUser } from "../user";

interface UserState {
  currentUser: CurrentUser;
  isLoading: boolean;
  error: null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const reducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case UserActionType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case UserActionType.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case UserActionType.SIGN_OUT_FAILED:
    case UserActionType.SIGN_IN_FAILED:
    case UserActionType.SIGN_UP_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
