import  { useEffect, useState } from 'react'
import Container from '../../components/Container'
import axios from 'axios'
import PieChart from './Pie'

const Skills = () => {
 const [skilldata, setskilldata] = useState([]);
     useEffect(() => {
       axios.get("/data/Skills.json").then((response) => {
         setskilldata(response.data);
       });
     }, []);
     console.log(skilldata)
  return (
      <Container className="py-16 min-h-screen px-[80px]  mx-auto  ">
        <div>
            <h1 className='text-center text-white font-bold text-[40px] font-primary'>My Recent Skills</h1>

            <div className='pt-[70px] flex flex-col justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-8 space-y-2.5'>
                       {skilldata.map((item,index)=>{
                        return <div key={index} className=''>
                          <PieChart percentage={item.percentage} per={item.percentage} img={item.icon}>
                          </PieChart>
                        </div>
                       })}
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default Skills