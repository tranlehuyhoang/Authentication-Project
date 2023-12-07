import { createSlice } from '@reduxjs/toolkit';
const initialState = {

    username: '',
    active: false

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.username = action.payload;

        },
        setUpdateCredentials: (state, action) => {
            state.username = action.payload;

        },
        logout: (state, action) => {
            state.username = '';

        },
    },
});

export const { setCredentials, setUpdateCredentials, logout } = authSlice.actions;

export default authSlice.reducer;