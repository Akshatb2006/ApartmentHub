import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMobileMenuOpen: false,
    theme: 'light',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        closeMobileMenu: (state) => {
            state.isMobileMenuOpen = false;
        },
    },
});

export const { toggleMobileMenu, setTheme, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
