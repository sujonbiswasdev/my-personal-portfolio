import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from '../pages/Home/Home';
import Navbar from '../layouts/Navbar/Navbar';
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index