import { useDispatch, useSelector } from "react-redux"
import { onCloseCartModal, onOpenCartModal } from "../store/ui/uiSlice"

export const useUiStore = () => {
    const dispatch = useDispatch()

    const {isCartModalOpen} = useSelector(state => state.ui)

    const openModal = () => {
        dispatch(onOpenCartModal())
    }

    const closeModal = () => {
        dispatch(onCloseCartModal())
    }

    return {
        // properties
        isCartModalOpen,

        //Methods
        openModal,
        closeModal
    }
}