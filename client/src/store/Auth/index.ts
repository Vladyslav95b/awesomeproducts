import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/requests/auth";

export interface AuthState {
  isAuth: boolean;
  loading: boolean;
  error: boolean;
}

const initialState = {
  isAuth: typeof localStorage.getItem("jwt") === "string",
  loading: false,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      localStorage.removeItem("jwt");
      return { ...state, isAuth: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.isAuth = true;
      state.error = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
