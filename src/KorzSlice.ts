import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "./calcTotalPrice.ts";
import { getCartFromLS } from "./getCartFromLS.ts";
import { CartItem, CartSliceState } from "./types.ts";

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(obj => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj._id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { addItem, removeItem, minusItem, clearItem } = cartSlice.actions;

export const cartReduser = cartSlice.reducer;
