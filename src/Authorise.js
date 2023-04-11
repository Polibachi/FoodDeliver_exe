import { Dispatch, AnyAction, PayloadAction } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../node_modules/axios/lib/axios.js";
import { create } from "./my-app/postManager.js";

export const fetchUserData = createAsyncThunk(
  "/fetchUserData",
  async params => {
    const { data } = await axios.post("http://localhost:4444/login", params);
    return data;
  }
);

export const fetchUserDataReg = createAsyncThunk(
  "/fetchUserDataReg",
  async params => {
    const { data } = await axios.post("http://localhost:4444/register", params);
    return data;
  }
);

const initialState = {
  data: null,
  status: "loading"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchUserData.pending]: state => {
      state.status = "loading";
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchUserData.rejected]: state => {
      state.status = "error";
      state.data = null;
    },
    [fetchUserDataReg.pending]: state => {
      state.status = "loading";
      state.data = null;
    },
    [fetchUserDataReg.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchUserDataReg.rejected]: state => {
      state.status = "error";
      state.data = null;
    }
  }
});

export const isLoggedIn = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
