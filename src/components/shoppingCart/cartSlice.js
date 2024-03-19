import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: new Map(),
};

export const cartSlice = createSlice({
    // The name of our reducer
    name: 'cart',
    // The initial state of our reducer
    initialState,
    // These are the actions that will be made available
    reducers: {
        addToCart: (state, action) => {
            const productId= action.payload
            const cart = state.value
            if (cart.has(productId)){
                const oldCount = cart.get(productId)
                const newCount = oldCount + 1
                cart.set(productId, newCount)
            } else {
                cart.set(productId, 1)
            }
        },
        decreaseByOne: (state, action) => {
            const productId = action.payload
            const cart = state.value
            if(cart.has(productId)){
                const oldCount = cart.get(productId)
                const newCount = oldCount - 1
                if(newCount === 0){
                    cart.delete(productId)
                } else {
                    cart.set(productId, newCount)
                }
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload
            const cart = state.value
            cart.delete(productId)
        },
       reset: (state) => {
          state.value = new Map();

       }
    },
});

export const { addToCart, decreaseByOne, removeFromCart, reset } = cartSlice.actions;

export default cartSlice.reducer;
