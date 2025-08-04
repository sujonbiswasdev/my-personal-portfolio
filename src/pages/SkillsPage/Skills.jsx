import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import axios from 'axios'

const Skills = () => {
    const [skilldata,setskilldata]=useState([])
    useEffect(()=>{
        axios.get('/data/Skills.json')
          .then((response)=>{
            setskilldata(response.data)
          }) 
},[])
  
  return (
    <Container className="py-16 h-screen px-[80px] mx-auto ">
        <div>
            <h1 className='text-center text-white font-bold text-[40px] font-primary'>My Recent Skills</h1>

            <div className='pt-[70px]'>
                <div className='grid grid-cols-4 space-y-20'>
                  {skilldata.map((items)=>(
                    <div key={items.id} className='space-y-1'>
                      <img src={items.icon} alt="" />
                      <h2 className='text-[30px] text-primary font-bold'>{items.percentage}</h2>
                      <h3 className='text-secoundary font-medium'>{items.name}</h3>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Skills