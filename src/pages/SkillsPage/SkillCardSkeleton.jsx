import { useState,useEffect } from "react";
import axios from "axios";
const SkillCardSkeleton = () => {
  const [skilldata, setskilldata] = useState([]);
  useEffect(() => {
    axios.get("/data/Skills.json").then((response) => {
      setskilldata(response.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 space-x-6">
      {skilldata.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-gray-400 animate-pulse border border-gray-200 rounded-sm"
          >
            <h1
              className="text-transparent select-none bg-gray-600 animate-pulse"
            >
              {item.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4 space-y-1 mt-2 p-2">
              {item.skill.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-2 mt-2 bg-gray-600 animate-pulses px-4 py-2 items-center rounded-sm text-transparent select-none"
                  >
                    <div className="w-10 h-10  bg-gray-700 rounded-xl animate-pulse" />
                    <p className="text-sm font-semibold">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCardSkeleton;
