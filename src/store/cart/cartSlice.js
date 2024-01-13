import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
        name: 'cart',
        initialState:{
                cart:[],
                total: 0,
        },
        reducers: {
                addToCart: (state, {payload} ) => {
                        
                        state.cart = state.cart.map(product => {
                                return product
                        });
                        state.cart.push(payload)
                        state.total += payload.precio * payload.cantidad
                        console.log(state.cart, state.total)

                },
                removeFromCart: (state, {payload}) => {
                        state.cart = state.cart.filter(item => state.cart.name !==  payload.name)
                        state.total -= payload.price
                }
         }
});
export const { addToCart, removeFromCart} = cartSlice.actions;