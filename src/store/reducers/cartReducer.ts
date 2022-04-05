import { CartItem } from "../../state/cartItem";
import { CartActionType } from "../action-types/cartActionTypes";
import { Action } from "../actions";

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const reducer = (state: CartState = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CartActionType.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

export default reducer;
