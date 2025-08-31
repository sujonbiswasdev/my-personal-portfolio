import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
const Service = () => {
  const [SVData,setSvdata]=useState([])
  useEffect(()=>{
    axios.get('/data/Service.json')
     .then((response)=>{
      setSvdata(response.data)
     })
  },[])
  console.log(SVData)
  return (
    <>
    <Container className="pt-0 md:pt-[10px] px-14 bg-black md:px-[80px]">
      <div className='text-center space-y-2'>
        <h2 className='text-[30px] lg:text-[40px]  font-bold'>Services</h2>
        <p className='text-grayText text-[20px]'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-3 md:space-x-10 space-y-10 items-center pt-4 md:pt-[80px]'>
        {
          SVData.flatMap((item)=>{
            return <div key={item.id} className='bg-[#10061f]  rounded-xl p-8 service transition-all duration-250 '>
              <div className='flex flex-col justify-center items-center gap-4'>
                <img src={item.img} className='w-[90px] hover:hue-rotate-90 hover:scale-105 transition-all duration-200' alt="" />
                <div className='flex flex-col gap-6'>
                  <h2 className='font-bold text-primary font-primary text-[24px] text-center'>{item.Heading}</h2>
                  <p className='max-w-[339px] text-center  fomt-primary font-medium text-secoundary leading-[150%]'>{item.des}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>

    </Container>
    </>
  )
}

export default Service