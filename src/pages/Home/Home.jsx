import React from "react";
import Hero from "./Hero";
import Service from "../services/Service";
import Skills from "../SkillsPage/Skills";
import Portfolio from "../work/Portfolio";
const Home = () => {
  return (
    <>
      <main className="space-y-4">
        <Hero />
        <div className="">
          <Service />
        </div>

        <div className="mt-[700px] relative md:-mt-40 ">
          <Skills />
        </div>

        <Portfolio />
      </main>
    </>
  );
};

export default Home;
