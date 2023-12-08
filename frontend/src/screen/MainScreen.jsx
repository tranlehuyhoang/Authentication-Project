import React, { useEffect } from 'react';
import Username from '../components/common/Username.jsx';
import Password from '../components/common/Password.jsx';
import Register from '../components/common/Register.jsx';
import Profile from '../components/common/Profile.jsx';
import Recovery from '../components/common/Recovery.jsx';
import Reset from '../components/common/Reset.jsx';
import PageNotFound from '../components/common/PageNotFound.jsx';
import { useSelector } from 'react-redux';

const MainScreen = () => {
    const { username } = useSelector(state => state.auth);
    const token = localStorage.getItem('token');

    return (
        <>
            {token && <Profile />}
            {!username && !token && <Username />}
            {username && !token && <Password />}
        </>
    );
};

export default MainScreen