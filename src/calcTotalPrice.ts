import { CartItem } from "./types.ts";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price + sum, 0);
};
