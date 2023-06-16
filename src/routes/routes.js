import React from 'react'
import ProtectedRoutes from './ProtectedRoutes'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;