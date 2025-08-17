import React from "react";
import { useState } from "react";
import { Button } from "@heroui/react";
const Responsive = ({ isOpen, setisOpen, NavItems, setNavitems }) => {
  return (
    <div className="">
      {isOpen && (
        <div className="top-0 left-0 overflow-y-hidden flex backdrop-blur-3xl bg-transparent flex-col  items-center h-[100vh] relative ">
          <div className="space-y-5 py-20 ">
            {NavItems.map((items,index) => {
              return (
                <ul className="top-0 " key={index}>
                  <li
                    className="cursor-pointer"
                    onClick={() => setisOpen(!isOpen)}
                  >
                    {items.item}
                  </li>
                </ul>
              );
            })}

            {/* account */}
            <div className="flex gap-3">
              <Button onPress={()=>setisOpen(!isOpen)}
                variant="bordered"
                className="text-white border-1 border-primary"
              >
                Contact Me
              </Button>
              <Button onPress={()=>setisOpen(!isOpen)} variant="bordered" className="text-white">
                Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Responsive;
