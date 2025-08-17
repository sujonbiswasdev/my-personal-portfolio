export const CardSkeleton = ({width,des,tech,library}) => {
  return (
    
    <div className="gird grid-cols-1 md:grid-cols-2 select-none md:max-w-[500px] animate-pulse">
        <div className="bg-gray-600 w-full h-[200px] rounded">

        </div>
        <div className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded">
            {width}
        </div>
        <p className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded">{des}</p>
        <div className="w-full h-[2px] bg-gray-600 mt-5"></div>
        <div className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded">{tech}</div>
        <div className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded ">{library}</div>
        <div className="flex gap-4">
            <button className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded">github</button>
            <button className="bg-gray-600 w-max text-gray-600 h-[20px] mt-5 rounded">github</button>
        </div>
    </div>
  )
}
