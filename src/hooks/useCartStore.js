import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/cart/cartSlice"

export const useCartStore = () => {
    const dispatch = useDispatch()
    
    const {cart, total} = useSelector(state => state.cart)

    const savingItemInCart = (item) => {
        dispatch(addToCart(item))
    }

    return {
        savingItemInCart
    }
}