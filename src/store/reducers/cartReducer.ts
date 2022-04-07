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
  switch (action.type) {
    case CartActionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CartActionType.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
