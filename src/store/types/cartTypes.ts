import { CategoryItem } from "./categoryTypes";

export type CartItem = CategoryItem & {
  quantity: number;
};
