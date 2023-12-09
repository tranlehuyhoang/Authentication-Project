
import { useNavigate } from 'react-router-dom';
import Password from '../screen/Password';

export function AuthorizeUser({ children }) {
    const navigation = useNavigate();
    if (localStorage.getItem('token')) {
        return children;
    } else {
        navigation('/')
        return null;
    }
}



export function ProtectRoute({ children }) {
    const navigation = useNavigate();

    const token = localStorage.getItem('token');
    if (!token) {
        navigation('/')
    }
    return children;
};