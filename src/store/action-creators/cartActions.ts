import { CartItem } from "../../state/cartItem";
import { Product } from "../../state/product";
import { CartActionType } from "../action-types/cartActionTypes";

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], productToRemove: Product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem?.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: Product) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean: any) => ({
  type: CartActionType.SET_IS_CART_OPEN,
  payload: boolean,
});

export const addItemToCart = (cartItems: any, productToAdd: Product) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return { type: CartActionType.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (
  cartItems: any,
  productToRemove: Product
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return { type: CartActionType.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems: any, cartItemToClear: Product) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return { type: CartActionType.SET_CART_ITEMS, payload: newCartItems };
};
