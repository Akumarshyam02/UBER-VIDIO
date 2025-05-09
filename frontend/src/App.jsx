import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/login" element={<UserLogin />} /> 

        <Route path="/signup" element={<UserSignup />} />
        <Route path="/" element={<UserLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
      </Routes>
    </div>
  )
}

export default App
