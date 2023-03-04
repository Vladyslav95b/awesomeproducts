import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../index";

interface ILogin {
  username: string;
  password: string;
}
interface IRegister {
  email: string;
  username: string;
  password: string;
}

export const login = createAsyncThunk("auth/signin", async (payload: ILogin) => {
  await http
    .post(`api/auth/signin`, {
      username: payload.username,
      password: payload.password,
    })
    .then((res) => {
      if (res.status > 199 && res.status < 300) {
        localStorage.setItem("jwt", JSON.stringify(res.data.jwt));
      }
      return res.data;
    });
});

export function registerUser(data: IRegister) {
  return http.post("api/auth/signup", {
    email: data.email,
    username: data.username,
    password: data.password,
  });
}
