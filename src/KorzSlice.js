import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios.js";
import { getCartLocal } from "./LocalKorz.js";
import { calcPrice } from "./TotalPrice.js";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

const initialState = {
  totalPrice: [0],
  items: [0]
};

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
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export const cartReduser = cartSlice.reducer;
