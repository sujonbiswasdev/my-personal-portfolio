import Container from "../../components/Container"
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Typed from 'typed.js';
import React from "react";
import { Button } from "@heroui/react";

const Hero = () => {
   const el = React.useRef(null);
   React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['font-end developer'],
      cursorChar: '┃',
      fadeOutDelay: 500,
       typeSpeed: 200
    });

    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <Container className="px-[40px] md:px-[40px] py-[20px] md:py-[60px]">
      <div className="flex flex-col justify-around items-center md:flex-row ">
        <div className="basis-100 w-full">
          <h1 className="font-primary font-black text-[35px] md:text-[50px] leading-tight"> <span className="text-[18px] md:text-[25px]"> Hello,</span> <br /> <span className="text-[24px] md:text-[30px]">I’m Sujon</span> <br /> <span className="text-primary" ref={el}>A Product Designer</span> </h1>

          <div className="flex gap-6 pt-5">
            <a href="https://www.instagram.com/sujonbiswasdev" className="text-3xl text-white border-none outline-none cursor-pointer "><FaInstagramSquare/></a>
            <a href="https://www.linkedin.com/in/sujon-biswas-934a8b37a/" className="text-3xl text-white border-none outline-none cursor-pointer">
            <FaLinkedin/></a>
            <a href="https://www.facebook.com/sujonbiswas2025/" className="text-3xl text-white border-none outline-none cursor-pointer"><FaFacebook/></a>
          </div>

          <div className="py-14 flex gap-5">
            <a className="bg-[#FD6F00] text-white font-bold font-primary text-[20px] py-1 px-6 rounded-xl" href="https://shorturl.at/Vv1bI">Hire Me</a>
            <a className="border border-[#FD6F00] text-white font-bold font-primary text-[20px] py-1 px-6 rounded-xl" href="https://shorturl.at/Vv1bI">Order Now</a>


          </div>

          <div className="py-8 flex flex-col justify-center items-center md:flex-row gap-4">
            <div className="border-r-2 border-gray-600 pr-10 ">
                <h2 className="text-primary font-extrabold text-[24px] font-primary">5+</h2>
                <h3 className="text-[20px] font-bold ">Experiences</h3>

            </div>
            <div className="border-r-2 border-gray-600 pr-10 w-[150px]  ">
                <h2 className="text-primary font-extrabold text-[24px] font-primary">20+</h2>
                <h3 className="text-[20px] font-bold w-[150px]">Project done</h3>

            </div>
            <div className="border-r-2 border-gray-600 pr-1">
                <h2 className="text-primary font-extrabold text-[24px] font-primary">80+</h2>
                <h3 className="text-[20px] font-bold w-[150px] ">Happy Clients</h3>

            </div>

          </div>
        </div>

        <div className="basis-100 ">
           <div className="z-10 relative">
         
          <img src="/images/HeroImg.png" className="z-0 " alt="" />
             <div className="absolute left-0 bottom-0 h-1/5 right-0 z-10  bg-gradient-to-t from-black to-transparent hidden md:block ml-3 "></div>
        </div>
        
        </div>
       
        
      </div>
    </Container>
  )
}

export default Hero