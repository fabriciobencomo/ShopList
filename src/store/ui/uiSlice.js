import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isCartModalOpen: false
    },
    reducers: {
        onOpenCartModal: (state) => {
            state.isCartModalOpen = true
        },
        onCloseCartModal: (state) => {
            state.isCartModalOpen = false
        },
    }
});
export const { onOpenCartModal, onCloseCartModal} = uiSlice.actions;