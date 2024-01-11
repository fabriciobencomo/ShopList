import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
        cart:[],
        total: 0,
        reducers: {
                increment: (state, /* action */ ) => {
                        state.counter += 1;
                },
        }
});
export const { increment } = cartSlice.actions;