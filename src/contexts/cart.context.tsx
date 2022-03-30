import { createContext, ReactNode, useReducer } from "react";
import { CartItem } from "../state/cartItem";
import { Product } from "../state/product";
import { createAction } from "../utils/reducer/reducer.utils";

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

export interface AppContextInterface {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<boolean>;
  cartItems: CartItem[] | [];
  addItemToCart: (value: Product) => void;
  removeItemFromCart: (value: Product) => void;
  clearItemFromCart: (value: Product) => void;
  cartCount: number;
  cartTotal: number;
}

const cartContextDefaultValue: AppContextInterface = {
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
};

export const CartContext = createContext<AppContextInterface>(
  cartContextDefaultValue
);

enum CartActionType {
  SET_CART_ITEMS = "set_cart_items",
  SET_IS_CART_OPEN = "set_is_cart_open",
}

interface SetCartItemsAction {
  type: CartActionType.SET_CART_ITEMS;
  payload: any;
}

interface SetIsCartOpenAction {
  type: CartActionType.SET_IS_CART_OPEN;
  payload: any;
}

type Action = SetCartItemsAction | SetIsCartOpenAction;

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state: CartState = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionType.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CartActionType.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, initialState);

  const updateCartItemReducer = (newCartItems: CartItem[]) => {
    const cartCount = newCartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    );

    const cartTotal = newCartItems.reduce(
      (total: number, cartItem: CartItem) =>
        total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CartActionType.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: cartTotal,
        cartCount: cartCount,
      })
    );
  };

  const addItemToCart = (productToAdd: Product) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove: Product) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear: Product) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool: boolean) => {
    dispatch(createAction(CartActionType.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
