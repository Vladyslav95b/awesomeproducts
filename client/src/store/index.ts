import { configureStore, Action, ThunkDispatch, combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./slices/authSlice";
import cartReducer from './slices/cartSlice';

const persistConfig = {
    key: 'root',
    blacklist: ['authReducer'],
    storage,
  }
const rootReducer = combineReducers({
    authReducer,
    cartReducer
})
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
