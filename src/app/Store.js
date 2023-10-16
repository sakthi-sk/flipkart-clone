import{configureStore}from '@reduxjs/toolkit';
import  useReducer from '../slices/UserSlices';
import cartReducer from '../slices/CartSlice'
export const store =configureStore({
        reducer:{
            userData:useReducer,
            cartData:cartReducer,
        },
})