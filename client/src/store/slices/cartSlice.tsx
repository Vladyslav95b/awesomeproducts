import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
    id: number, pricePerOne: number, quantity: number, totalPrice: number 
}

export interface CartState {
    cartItems: CartItem[]
  }

const initialState: CartState = {
    cartItems: [],
  };

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<any>)  => {
        console.log('invoked')
        const isInCard: CartItem | undefined = state.cartItems.find((item: CartItem) => item?.id === action.payload.id)
        if(isInCard) {
            //@ts-ignore
            const newArr = JSON.parse(JSON.stringify(state.cartItems))
            console.log(state)
            isInCard.quantity = isInCard?.quantity + 1
            isInCard.totalPrice += isInCard.pricePerOne;
            const indexOf = state.cartItems.findIndex((item: CartItem) => item?.id === action.payload.id)
            newArr.splice(indexOf, 1, isInCard)
            return {...state, cartItems: newArr}
        }
        
        return { ...state, cartItems: [...state.cartItems, {id: action.payload.id, quantity: 1, pricePerOne: action.payload.price, totalPrice: action.payload.price}] };
      },
      removeItem: (state, payload) => {
        // return { ...state, isAuth: false };
      },
      clear: (state) => {
        return {...state, cartItems: [] }
      }
    },
    extraReducers: {

    },
  });

export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
