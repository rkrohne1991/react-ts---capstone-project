import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";

const reducers = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
