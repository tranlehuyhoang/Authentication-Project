import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userSelectedSlice from './slices/userSelectedSlice';


const store = configureStore({
    reducer: {

        auth: authReducer,

        userSelected: userSelectedSlice

    },

    devTools: true,
});

export default store;