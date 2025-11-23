import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    data: null,
    error: null,
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitStart: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        submitSuccess: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        submitFailure: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        resetForm: (state) => {
            state.status = 'idle';
            state.data = null;
            state.error = null;
        },
    },
});

export const { submitStart, submitSuccess, submitFailure, resetForm } = formSlice.actions;
export default formSlice.reducer;
