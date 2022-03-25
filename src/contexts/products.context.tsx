import { createContext, ReactNode, useState } from "react";

// import SHOP_DATA from "../shop-data.js";
// import SHOP_DATA from "../shop-data.json";
import { Product } from "../state/product";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

interface AppContextInterface {
  products: Product[];
}

export const ProductContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
