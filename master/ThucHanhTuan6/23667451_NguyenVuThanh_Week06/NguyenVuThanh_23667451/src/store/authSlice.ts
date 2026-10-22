import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./store";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginWithDemoData(state) {
      state.user = {
        id: "user-1",
        name: "NguyenVuThanh_23667451",
        email: "23667451.thanh@student.iuh.edu.vn",
      };
      state.token = "demo-token";
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginWithDemoData, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
