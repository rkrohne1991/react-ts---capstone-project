import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

type CurrentUser = User | null;

interface AppContextInterface {
  currentUser: CurrentUser;
  setCurrentUser: React.Dispatch<CurrentUser>;
}

const userContextDefaultValue: AppContextInterface = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext<AppContextInterface>(
  userContextDefaultValue
);

enum UserActionType {
  SET_CURRENT_USER = "set_current_user",
}

interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: CurrentUser;
}

type Action = SetCurrentUserAction;

interface UserState {
  currentUser: CurrentUser;
}

const initialState: UserState = {
  currentUser: null,
};

const userReducer = (state: UserState = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState);

  const setCurrentUser = (user: CurrentUser) => {
    dispatch(createAction(UserActionType.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
