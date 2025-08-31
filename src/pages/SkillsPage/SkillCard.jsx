import { useState,useEffect } from "react";
import axios from "axios";
import { hover } from "framer-motion";
const SkillCard = () => {
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
            className="bg-gray-500 border border-gray-200 hover:bg-gray-600 transition-all duration-150 rounded-sm"
          >
            <h1
              className="hover:bg-blue-900  text-white font-bold px-4 py-2 "
              style={{ backgroundColor: item.color}}
            >
              {item.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4 space-y-1 mt-2 p-2">
              {item.skill.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 mt-2 bg-gray-800 px-4 py-2 items-center rounded-sm"
                  >
                    <img src={item.icon} className="w-8 h-8" alt={item.name} />
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

export default SkillCard;
