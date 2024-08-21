import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import SignUp from './pages/signup/SignUp'
import LoginPage from './pages/login/LoginPage'
import Index from './home'
import Layout from './Layout'
import SocialProfile from './pages/profile/SocialProfile'
import Request from './pages/requests/Request'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgetpassword' element={<Forgetpassword />} />
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Index />}/>
        <Route path='socialprofile' element={<SocialProfile />} />
        <Route path='requests' element={<Request/>} />
      </Route>
    </Routes>
  )
}

export default App
