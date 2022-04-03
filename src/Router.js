import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import Register from './components/Register'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

const Router = () => {
return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
            <Route path="/SignIn" element={<SignIn />}/>
            <Route path="/Register" element={<Register />}/>
        </Routes>
    </BrowserRouter>)
}
export default Router