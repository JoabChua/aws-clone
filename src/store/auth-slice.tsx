import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Auth {
  isLoggedIn: Boolean;
}

export interface LoginObject {
  email: string;
  password: string;
}

const initState: Auth = {
  isLoggedIn: localStorage.getItem("auth") === "1" ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    login: (state, action: PayloadAction<LoginObject>) => {
      if (
        action.payload.email.includes("@") &&
        action.payload.password.length > 5
      ) {
        state.isLoggedIn = true;
        localStorage.setItem("auth", "1");
      }
    },
    logout: (state: Auth) => {
      state.isLoggedIn = false;
      localStorage.removeItem("auth");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
