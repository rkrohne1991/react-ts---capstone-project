import { ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CartActionType } from '../action-types/cartActionTypes';
import { CartItem } from '../types/cartTypes';

export type SetIsCartOpen = ActionWithPayload<
  CartActionType.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CartActionType.SET_CART_ITEMS,
  CartItem[]
>;
