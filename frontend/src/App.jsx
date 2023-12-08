import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Username from './components/common/Username.jsx';
import Password from './components/common/Password.jsx';
import Register from './components/common/Register.jsx';
import Profile from './components/common/Profile.jsx';
import Recovery from './components/common/Recovery.jsx';
import Reset from './components/common/Reset.jsx';
import PageNotFound from './components/common/PageNotFound.jsx';
// import { AuthorizeUser, ProtectRoute } from './middleware/auth.js'
import MainScreen from './screen/MainScreen.jsx';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}