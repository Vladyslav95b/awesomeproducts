import { configureStore, Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

import authReducer from "./slices/authSlice";
import cartReducer from './slices/cartSlice';


export const store = configureStore({
  reducer: {
    authReducer,
    cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
