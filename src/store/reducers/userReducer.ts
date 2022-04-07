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
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionType.SIGN_IN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    // case UserActionType.SET_CURRENT_USER:
    // case UserActionType.CHECK_USER_SESSION:
    // case UserActionType.GOOGLE_SIGN_IN_START:
    // case UserActionType.EMAIL_SIGN_IN_START:
    //   return;
    default:
      return state;
  }
};

export default reducer;
