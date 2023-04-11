import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Authorise.js";

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
export default store;
