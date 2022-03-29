export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductObject {
  [title: string]: Product[];
}

export interface ShopData {
  categoriesMap: ProductObject;
}
