export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  vaha: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
