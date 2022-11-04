import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Register from '../pages/Register';

function PublicRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
        </Routes>
    </Router>
  )
}

export default PublicRoutes