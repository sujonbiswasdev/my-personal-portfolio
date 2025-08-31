import React from "react";
import Hero from "./Hero";
import Service from "../services/Service";
import Skills from "../SkillsPage/Skills";
import Portfolio from "../work/Portfolio";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
     <Helmet>
        <title>sujon biswas</title>
         <link rel="canonical" href="http://localhost:5173/" />
      </Helmet>
      <main className="space-y-4">
        <Hero />
        <div className="">
          <Service />
        </div>

        <div className="">
          <Skills />
        </div>

        <Portfolio />
      </main>
    </>
  );
};

export default Home;
