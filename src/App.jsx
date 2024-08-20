import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import SignUp from './pages/signup/SignUp'
import LoginPage from './pages/login/LoginPage'
import ReferTalent from './home/highlights/ReferTalent'
import Index from './home'
import SocialProfile from './pages/profile/SocialProfile'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<SignUp />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/forgetpassword' element={<Forgetpassword/>}/>
    <Route path='/home' element={<Index/>}/>
    <Route path='/home/profile' element={<SocialProfile/>}/>
    {/* <Route path='/highlights/refertalent'element={<ReferTalent/>}/> */}
    </Routes>
    </>
  )
}

export default App
