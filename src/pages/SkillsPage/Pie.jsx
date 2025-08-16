import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart=({ percentage,per,img})=>{
    const data={
        datasets:[{
            data:[percentage,100-percentage],
            backgroundColor:['#84cc16','#78716c'],
            circumference:360,
            borderWidth:0,
            rotation:-90,
            cutout:"62%",
            hoverBackgroundColor:"#2563eb",
            animation:{
                animateRotate:true,
                animateScale:true
            }

        }]
    }

    const options={
        responsive: true,
    }
   const [percentData,setpercentData]= useState([])
   useEffect(()=>{
    fetch('/data/Skills.json').then((response)=>{
        return response.json()
    })
    .then((res)=>{
        setpercentData(res)
    })
   },[])
    return(
        <div className="w-[180px] relative flex flex-c justify-center items-center">
            <Doughnut data={data} options={options}></Doughnut>
            <img src={img}  className="absolute top-14 w-[50px] left-16 hover:-hue-rotate-45 z-30 opacity-90 hover:scale-120 hover:opacity-100 transition-all duration-200" alt="" />
            <h2 className="absolute top-26 left-16 text-xl md:text-2xl font-bold text-primary">{per} %</h2>
          
        </div>
    )
}

export default PieChart

