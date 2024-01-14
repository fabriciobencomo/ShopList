import { configureStore} from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})