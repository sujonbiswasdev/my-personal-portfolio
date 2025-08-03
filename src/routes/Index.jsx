import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from '../pages/Home/Home';
import Navbar from '../layouts/Navbar/Navbar';
import Service from '../pages/services/Service';
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Service' element={<Service/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index