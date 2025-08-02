import { useState } from "react";
import Container from "../../components/Container";
import axios from "axios";
import { Button } from "@heroui/react";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import Response from "./Response";
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [darkMode, setdarkMode] = useState(false);
  const [NavItems, setNavitems] = useState([]);
  axios.get("/data/NavItem.json").then((response) => {
    setNavitems(response.data);
  });
  return (
    <div className="w-full  top-0 sticky z-50 border-b-1 backdrop-blur-xl bg-transparent border-gray-600">
      <Container className="px-[50px]  md:px-[15px] lg:px-[90px] py-3   ">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <div>
          <h1 className="bg-linear-to-r from-primary to-red-700 text-transparent bg-clip-text inline-block text-3xl font-bold cursor-pointer transition-all duration-150  hover:scale-120 ">
            su<span className="">jon</span>
          </h1>
        </div>
        {/* menu */}
        <div className="hidden md:flex md:gap-[20px] lg:gap-[40px]">
          {NavItems.flatMap((items) => (
            <ul key={items.id}>
              <li className="text-[#C1C1C1] md:text-[18px] font-medium navitem cursor-pointer">
                {items.item}
              </li>
            </ul>
          ))}
        </div>

        <div className="flex gap-1 md:gap-5 lg:gap-10 items-center">
          {/* account */}
          <div className="hidden md:flex gap-1 md:gap-2 lg:gap-3">
            <Button
              variant="bordered"
              className="text-white border-1 border-primary"
            >
              Contact Me
            </Button>
            <Button variant="bordered" className="text-white">
              Account
            </Button>
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
      <Response isOpen={isOpen} setisOpen={setisOpen} NavItems={NavItems} setNavitems={setNavitems}/>
    </Container>
    </div>
  );
};

export default Navbar;
