import { combineReducers } from 'redux';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer';
import cartReducer from './cartReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
