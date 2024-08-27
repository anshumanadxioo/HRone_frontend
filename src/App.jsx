import { Route, Routes } from 'react-router-dom'
import './App.css'
import Forgetpassword from './pages/forgetpassword/Forgetpassword'
import SignUp from './pages/signup/SignUp'
import LoginPage from './pages/login/LoginPage'
import Index from './home'
import Layout from './Layout'
import SocialProfile from './pages/profile/SocialProfile'
import Request from './pages/requests/Request'
import Pending from './pages/requests/dropdownpages/Pending/Pending'
import Undo from './pages/requests/dropdownpages/Undo/Undo'
import Approved from './pages/requests/dropdownpages/Approved/Approved'
import Draft from './pages/requests/dropdownpages/Draft/Draft'
import Rejected from './pages/requests/dropdownpages/Rejected/Rejected'
import Inbox from '../src/pages/inboxfull/Inbox'
import BigCalenderSection from "./pages/bigcalender/BigCalenderSection"

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgetpassword' element={<Forgetpassword />} />
      <Route path='/home/calender' element={<BigCalenderSection/>} />

      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Index />} />
        <Route path='socialprofile' element={<SocialProfile />} />
        <Route path='requests' element={<Request />}>
          <Route path='Pending' element={<Pending />} />
          <Route path='Rejected' element={<Rejected />} />
          <Route path='Drafts' element={<Draft />} />
          <Route path='Approved' element={<Approved />} />
          <Route path='Undo' element={<Undo />} />
        </Route>
        <Route path='inbox' element={<Inbox />} />
       
      </Route>
    </Routes>
  )
}

export default App
