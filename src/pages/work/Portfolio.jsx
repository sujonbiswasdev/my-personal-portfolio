import React, { useState } from "react";
import Container from "../../components/Container";
import { ThemeProvider } from "../../hooks/contexts/ThemeProvider";
import WorkButton from "../../assets/svg/WorkButton";
import { Link } from "react-router";

const workData = [
  {
    id: 1,
    item: "All",
  },
  {
    id: 2,
    item: "Website design",
  },
  {
    id: 3,
    item: "App mobile design",
  },
  {
    id: 4,
    item: "App desktop",
  },
  {
    id: 5,
    item: "Braiding",
  },
];
const Portfolio = () => {
  const [currentindex,setCurrentIndex] = useState(0)
  const indexFind = (index)=>{
    setCurrentIndex(index)
  }
  return (
    <Container className="min-h-screen">
      <ThemeProvider>
        <div className="pt-16 pb-3">
          <h2 className="text-center font-bold text-[40px]">Portfolio</h2>
          <div className="flex justify-center items-center  py-3 gap-3 ">
            {workData.map((item,index) => (
              <div>
                <button onClick={()=>indexFind(index)} className={`${index===currentindex?"bg-[#FD6F00]":"bg-[#252525]"} px-6 py-3 rounded font-bold`} key={index}>
                  {item.item}
                </button>
              </div>
            ))}
          </div>

          <div className="py-16 px-16">
            <div>
              <div>
                <div className="max-w-[500px] h-[450px] bg-[#252525] px-2 rounded-2xl overflow-hidden cursor-pointer relative"><img src="/images/Image.png" className=" w-full  hover:scale-110 transition-all duration-300 object-cover mx-auto ml-1 bg-li" alt="" />
                <div className="flex gap-6 justify-between items-center py-4">
                  <div className="p-6">
                    <h2>Project name</h2>
                  <p>description</p>
                  <p>Technology used</p>
                  <p>library use</p>
                  </div>
                  <a href="https://github.com/sujonbiswas01/chills-bay-website"><WorkButton/></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Container>
  );
};

export default Portfolio;
