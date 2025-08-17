import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { ThemeProvider } from "../../hooks/contexts/ThemeProvider";
import WorkButton from "../../components/WorkButton";
import { CardSkeleton } from "../../components/CardSkeleton";


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
  const [currentindex, setCurrentIndex] = useState(0);
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },2000)
  })
  const indexFind = (index) => {
    setCurrentIndex(index);
  };
  const [workdata, setworkdata] = useState([]);
  useEffect(() => {
    fetch("/data/workdata.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => setworkdata(res));
  }, []);
  
  return (
    <Container className="min-h-screen">
      <ThemeProvider>
        <div className="pt-16 pb-3">
          <h2 className="text-center font-bold text-[40px]">Portfolio</h2>
          <div className="flex flex-wrap md:flex-row justify-center items-center  py-3 gap-3 ">
            {workData.map((item, index) => (
              <div>
                <button
                  onClick={() => indexFind(index)}
                  className={`${
                    index === currentindex ? "bg-[#FD6F00]" : "bg-[#252525]"
                  } px-6 py-3 rounded font-bold`}
                  key={index}
                >
                  {item.item}
                </button>
              </div>
            ))}
          </div>

          <div className="py-16 px-3 md:px-16">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 px-5 md:px-20 space-y-8">
                {workdata.flatMap((item) => {
                  return (
                    
                 <div>
                  {isLoading?(
                       <div
                      key={item.id}
                      className={`w-full md:max-w-[500px] pb-6 ${
                        item.length - 1 ? "h-[30px]" : "h-auto"
                      }  bg-[#252525] px-2 rounded-2xl overflow-hidden cursor-pointer relative `}
                    >
                      <img
                        src={item.img}
                        className=" w-full  hover:scale-110 transition-all duration-300 object-cover mx-auto ml-1 bg-li"
                        alt=""
                      /> 
                      <div className=" gap-6 justify-between items-center py-4">
                        <div className="p-6 space-y-2">
                          <h2 className="text-xl font-bold text-primary">
                            {item.heading}
                          </h2>
                          <p className=" text-sm text-gray-300"> {item.des}</p>
                          <div className="w-full h-[2px] bg-secoundary mt-4"></div>
                          <p className="flex gap-1">
                            {" "}
                            <span className="text-xl font-bold ">
                              {" "}
                              tech{" "}
                            </span> :{" "}
                            <div className="space-y-2">
                              {item.technology.map((item, index) => (
                                <button
                                  className="bg-[rgb(14,14,14)] px-3 py-1.5  md:ml-3 rounded-xl cursor-pointer font-semibold hover:bg-[#222222] transition-all duration-200"
                                  key={index}
                                >
                                  {item}
                                </button>
                              ))}
                            </div>
                          </p>
                          <p>
                            <span className="font-bolds ">library : </span>{" "}
                            {item.library.map((item, index) => (
                              <button
                                className="bg-[rgb(14,14,14)] px-3 py-1.5 ml-3 rounded-xl cursor-pointer font-semibold hover:bg-[#222222] transition-all duration-200"
                                key={index}
                              >
                                {item}
                              </button>
                            ))}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-1 md:gap-8 -mt-5 px-1 md:px-6">
                        <WorkButton link={item.url}>github</WorkButton>
                        <WorkButton link={item.link}>Live demo</WorkButton>
                      </div>
                    </div>
                  ):(<div><CardSkeleton library={item.library.map((item)=>{return item})} width={item.heading} des={item.des} tech={item.technology.map((item)=>{return item})}/></div>)}
                 </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Container>
  );
};


export default Portfolio