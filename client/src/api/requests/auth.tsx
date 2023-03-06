import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../index";

interface ILogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk("auth/login", async (payload: ILogin) => {
  await http
    .post(`/api/auth/signin`, {
      email: payload.email,
      password: payload.password,
    })
    .then((res) => {
      if (res.status > 199 && res.status < 300) {
        localStorage.setItem('jwt', res.data);
      }
      return res.data;
    })
});

