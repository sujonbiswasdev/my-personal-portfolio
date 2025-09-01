import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from '../pages/Home/Home';
import Navbar from '../layouts/Navbar/Navbar';
import Service from '../pages/services/Service';
import Skills from '../pages/SkillsPage/Skills';
import Portfolio from '../pages/work/Portfolio';
import Footer from '../layouts/Footes/Footer';
import Error from '../pages/Error/Error';
const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/works' element={<Portfolio/>} />
      <Route path='/*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Index