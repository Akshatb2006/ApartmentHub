import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    properties: [],
    loading: false,
    error: null,
    filters: {
        city: '',
        bedrooms: '',
        priceRange: '',
    },
};

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setProperties: (state, action) => {
            state.properties = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
    },
});

export const { setProperties, setLoading, setError, setFilters } = propertiesSlice.actions;
export default propertiesSlice.reducer;
