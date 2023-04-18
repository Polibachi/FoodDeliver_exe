import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Authorise.js";
import { postReducer } from "./Slice.js";
import { cartReduser } from "./KorzSlice.ts";

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    cartReduser
  }
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
