import { createContext, ReactNode, useEffect, useState } from "react";

// import SHOP_DATA from "../shop-data.js";
// import SHOP_DATA from "../shop-data.json";
import { Product } from "../state/product";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

interface AppContextInterface {
  products: Product[];
}

export const ProductContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
