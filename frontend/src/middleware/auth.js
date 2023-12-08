
import { useNavigate } from 'react-router-dom';
import Password from '../components/common/Password';
import { useDispatch, useSelector } from 'react-redux'
import Username from '../components/common/Username';

// export function AuthorizeUser({ children }) {
//     const { username } = useSelector(state => state.auth);
//     const navigate = useNavigate();

//     if (localStorage.getItem('token')) {
//         return children;
//     } else if (username) {
//         return <Password />;
//     } else {
//         return <Username />;
//     }
// }



// export function ProtectRoute({ children }) {
//     const token = localStorage.getItem('token');
//     if (token) {
//         window.location.href = '/';
//     }
//     return children;
// };
