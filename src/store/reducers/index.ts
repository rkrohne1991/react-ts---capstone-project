import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
