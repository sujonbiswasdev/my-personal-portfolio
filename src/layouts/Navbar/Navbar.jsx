import { useState } from "react";
import Container from "../../components/Container";
import axios from "axios";
import { Button } from "@heroui/react";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Responsive from "./Responsive";
import { NavLink } from "react-router";
import Signup from "../../pages/Accounts/Signup";
import Mymodal from "../../pages/Accounts/Mymodal";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const [NavItems, setNavitems] = useState([]);
  axios.get("/data/NavItem.json").then((response) => {
    setNavitems(response.data);
  });
  const value = true;
  return (
    <div className="w-full  top-0 sticky z-50 border-b-1 backdrop-blur-xl bg-transparent border-gray-600">
      <Container className="px-[50px]  md:px-[15px] lg:px-[90px] py-3   ">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <div>
          <NavLink to="/"><h1 className="bg-linear-to-r from-primary to-red-700 text-transparent bg-clip-text inline-block text-3xl font-bold cursor-pointer transition-all duration-150  hover:scale-120 ">
            su<span className="">jon</span>
          </h1></NavLink>
        </div>
        {/* menu */}
        <div className="hidden md:flex md:gap-[20px] lg:gap-[40px]">
          {NavItems.flatMap((items,index) => (
            <ul key={index}>
              <NavLink to={items.item==='Home'?"/":items.item} >
                {items.item}
              </NavLink>
            </ul>
          ))}
        </div>

        <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          {/* account */}
          <div className="hidden md:flex gap-1 md:gap-2 lg:gap-3">
         <NavLink to="/contact">   <button
              variant="bordered"
              className="text-white px-4 py-2 rounded-xl border-1 border-primary cursor-pointer"
            >
              Contact Me
            </button> </NavLink>
            <NavLink to={value===true?"/account":"/signup"}><button variant="bordered" className="text-white px-6 py-2 border-1 border-white rounded-xl">
              {value===true?<Signup/>:<Mymodal/>}
            </button></NavLink>
          </div>
          <div className="flex gap-10 items-center">
             {/* dark and light mode */}
          <button
            className="transition-all text-2xl flex justify-end"
            onClick={() => setdarkMode(!darkMode)}
          >
            {darkMode ? <FaMoon /> : <MdSunny />}
          </button>
          {/* menu items */}
          <button
            className="text-[20px] md:hidden flex cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          >
            {isOpen ? <IoIosCloseCircle /> : <AiOutlineBars />}
          </button>
          </div>
         
        </div>
      </nav>
      <Responsive isOpen={isOpen} setisOpen={setisOpen} NavItems={NavItems} setNavitems={setNavitems}/>
    </Container>
    </div>
  );
};

export default Navbar;
