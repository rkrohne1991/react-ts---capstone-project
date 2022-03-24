import { createContext, ReactNode, useState } from "react";

import SHOP_DATA from "../shop-data.json";
import { Product } from "../state/product";

interface AppContextInterface {
  products: Product[];
}

export const ProductContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(SHOP_DATA);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
