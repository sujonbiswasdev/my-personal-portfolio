import React from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from '../hooks/contexts/ThemeProvider';
const DorkmodeToggler = () => {
    const {DarkMode,setDarkMode}=useDarkMode()
  return (
    <button className='' onClick={()=>setDarkMode(!DarkMode)}>{DarkMode ? <FaMoon /> : <MdSunny />}</button>
  )
}

export default DorkmodeToggler