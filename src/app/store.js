import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import propertiesReducer from '../features/properties/propertiesSlice';
import uiReducer from '../features/ui/uiSlice';
import formReducer from '../features/ui/formSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        properties: propertiesReducer,
        ui: uiReducer,
        form: formReducer,
    },
});
