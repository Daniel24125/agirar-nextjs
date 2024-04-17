import React, { HTMLAttributes } from 'react'

const SquareGraphics = ({
    size,
    color="#4267B280",
    ...props
}:{
    size: number,
    color?: string,
    props?: any
}) => {
  return (<div {...props}>
    <div className=' rounded-md' style={{
        width: size, 
        height: size,
        backgroundColor: color
    }}></div>
    <div className=' rounded-md' style={{
        width: size, 
        height: size,
        backgroundColor: color,
        transform: "translate(25%,-75%)"
    }}></div>
  </div>
    
  )
}

export default SquareGraphics