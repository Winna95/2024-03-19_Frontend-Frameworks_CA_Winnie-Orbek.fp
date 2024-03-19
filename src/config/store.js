import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/shoppingCart/cartSlice'
import { enableMapSet } from 'immer';

enableMapSet()
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});