import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpen } from '../action-creators/cartActions';
import { CartItem } from '../types/cartTypes';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const reducer = (
  action: AnyAction,
  state: CartState = initialState,
): CartState => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  return state;
};

export default reducer;
