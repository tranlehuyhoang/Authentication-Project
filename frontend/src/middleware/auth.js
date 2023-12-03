
import { useNavigate } from 'react-router-dom';
import Password from '../screen/Password';

export function AuthorizeUser({ children }) {

    if (localStorage.getItem('token')) {

        return children;
    } else {
        window.location.href = '/';
        return null;
    }
}



export function ProtectRoute({ children }) {
    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/';
    }
    return children;
};
