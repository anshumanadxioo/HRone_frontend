import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import SignUp from './pages/signup/SignUp'
import LoginPage from './pages/login/LoginPage'

function App() {
  return (
    <>
    <Routes>
    <Route path='/signup' element={<SignUp />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/login/forgetpassword' element={<Forgetpassword/>}/>
    </Routes>
    </>
  )
}

export default App
