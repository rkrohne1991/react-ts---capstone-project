import { User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useReducer,
} from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface AppContextInterface {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export const userContextDefaultValue: AppContextInterface = {
  currentUser: null,
  setCurrentUser: () => null,
};

export const UserContext = createContext<AppContextInterface>(
  userContextDefaultValue
);

export enum UserActionType {
  SET_CURRENT_USER = "set_current_user",
}

export interface SetCurrentUserAction {
  type: UserActionType.SET_CURRENT_USER;
  payload: User | null;
}

export type Action = SetCurrentUserAction;

interface UsersState {
  currentUser: User | null;
}

const initialState: UsersState = {
  currentUser: null,
};

const userReducer = (state: UsersState = initialState, action: Action) => {
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

  const setCurrentUser = (user: any) => {
    dispatch({ type: UserActionType.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
      console.log(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
