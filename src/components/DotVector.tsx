import React from 'react'

const DotVector = ({
    color="bg-orange-400", 
    rotate=false,
    position="-top-5 -left-5"
}:{
    color?: string, 
    rotate?: boolean,
    position?: string
}) => {
  return (
    <div className={`flex gap-1 absolute ${position} ${rotate ? "rotate-180":""}`}>
        <div className="flex flex-col gap-1">
        <div className={`rounded-full ${color} w-3 h-3`}></div>
        <div className={`rounded-full ${color} w-3 h-3`}></div>
        </div>
        <div className={`rounded-full ${color} w-3 h-3`}></div>
  </div>
  )
}

export default DotVector