import { CartActionType } from '../action-types/cartActionTypes';

import { CartItem } from '../types/cartTypes';
import { CategoryItem } from '../types/categoryTypes';
import { withMatcher, createAction } from '../../utils/reducer/reducer.utils';
import { SetCartItems, SetIsCartOpen } from '../actions/cartActions';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem));
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id,
  );

  if (existingCartItem && existingCartItem.quantity === 1) return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

  return cartItems.map((cartItem) => (cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem));
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem,
): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen => createAction(CartActionType.SET_IS_CART_OPEN, boolean),
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CartActionType.SET_CART_ITEMS, cartItems),
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem,
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem,
): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem,
): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
