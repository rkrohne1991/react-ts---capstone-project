export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShopData {
  title: string;
  items: Product[];
}
