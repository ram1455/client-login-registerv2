import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'

function PrivateRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default PrivateRoutes