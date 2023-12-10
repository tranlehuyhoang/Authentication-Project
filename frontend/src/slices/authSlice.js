import { createSlice } from '@reduxjs/toolkit';
const initialState = {

    username: '',
    active: false

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;

        },
        setUpdateCredentials: (state, action) => {
            state.username = action.payload;

        },
        logout: (state, action) => {
            state.username = '';
            localStorage.removeItem('token');

        },
    },
});

export const { setUsername, setUpdateCredentials, logout } = authSlice.actions;

export default authSlice.reducer;