import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AuthPortal from './components/AuthPortal.jsx';
import Register from './components/Register.jsx';
import RequestPickup from './components/RequestPickup.jsx';
import History from './components/Histroy.jsx';
const App = () => {
  return (
   <>
   
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home/>} />
        <Route path="/authpage" element={<  AuthPortal/>} />
        <Route path="/requestpickup" element={<RequestPickup/>} />
        <Route path="/user/login" element={<Login/>} />
        <Route path="/recycler/login" element={<Login/>} />
        <Route path="/user/register" element={<Register/>} />
        <Route path="/recycler/register" element={<Register/>} />
        {/* <Route path="/account" element={<div>Account Page</div>} /> */}
        <Route path="/history" element={<History/>} />
        {/* Add more routes as needed */}
      </Routes>

   </>  
  )
}

export default App
