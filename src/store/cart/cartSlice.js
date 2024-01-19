import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
        name: 'cart',
        initialState:{
                cart:[],
                total: 0,
        },
        reducers: {
                addToCart: (state, {payload} ) => {
                        
                        state.total += payload.precio * payload.cantidad
                        const productexist = state.cart.findIndex(item => item.name == payload.name)
                        if(productexist != -1){
                                const {cantidad, precio} = state.cart[productexist]
                                console.log(cantidad, precio)
                                const newQty = cantidad + payload.cantidad
                                state.cart[productexist] = {...payload, cantidad: newQty }
                                console.log(state.cart[productexist])
                        }else{
                                state.cart.push(payload)
                        }
                        state.total.toFixed(2)
                
                },
                removeFromCart: (state, {payload}) => {
                        state.cart = state.cart.filter(product => {
                                if(product.name.toLowerCase() !==  payload.name.toLowerCase()){
                                        return product
                                }else{
                                        console.log(state.total, payload.precio)
                                        state.total = parseFloat(state.total) - parseFloat(payload.precio * payload.cantidad)
                                }
                        })
                        state.total.toFixed(2)
                }
         }
});
export const { addToCart, removeFromCart} = cartSlice.actions;