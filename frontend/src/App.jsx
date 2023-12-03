import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Username from './screen/Username.jsx';
import Password from './screen/Password.jsx';
import Register from './screen/Register';
import Profile from './screen/Profile';
import Recovery from './screen/Recovery';
import Reset from './screen/Reset';
import PageNotFound from './screen/PageNotFound';
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Username />} />
        <Route path='/register' element={<Register />} />
        <Route path='/password' element={<ProtectRoute><Password /></ProtectRoute>} />
        <Route path='/profile' element={<AuthorizeUser><Profile /></AuthorizeUser>} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}