import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CartItem } from "../state/cartItem";
import { Product } from "../state/product";

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

export interface AppContextInterface {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[] | [];
  addItemToCart: (value: Product) => void;
  cartCount: number;
}

export const cartContextDefaultValue: AppContextInterface = {
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
};

export const CartContext = createContext<AppContextInterface>(
  cartContextDefaultValue
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(cartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
