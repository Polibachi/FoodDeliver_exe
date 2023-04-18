import { RootState } from "./Store";

export const selectCart = (state: RootState) => state.cartReduser;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartReduser.items.find(obj => obj.id === id);
