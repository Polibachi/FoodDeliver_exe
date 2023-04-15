import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Authorise.js";
import { postReducer } from "./Slice.js";
import { cartReduser } from "./KorzSlice.js";

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    cartReduser
  }
});
export default store;
