import React from "react";
import Hero from "./Hero";
import Service from "../services/Service";
import Skills from "../SkillsPage/Skills";
const Home = () => {
  return (
    <>
      <main className="">
        <Hero />
        <div className="pt-[100px]">
          <Service />
        </div>
        <div className="-mt-48">
          <Skills />
        </div>
      </main>
    </>
  );
};

export default Home;
