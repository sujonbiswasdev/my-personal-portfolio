import React from 'react'
import Hero from './Hero'
import Service from '../services/Service'
import Skills from '../SkillsPage/Skills'
const Home = () => {
  return (
    <>
    <main>
      <Hero/>
      <div className='pt-[100px]'>
         <Service/>
      </div>
      <Skills/>
     
    </main>

    </>
  )
}

export default Home