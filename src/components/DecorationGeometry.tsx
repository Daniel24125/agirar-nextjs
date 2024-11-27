import { useTheme } from 'next-themes'
import React from 'react'

const DecorationGeometry = ({
    color, 
    position, 
    size,
    borderRadius,
    className,
    children
}:{
    color: string, 
    position: string,
    size: string,
    borderRadius?: string,
    className?: string,
    children?: React.ReactNode
}) => {
    const {theme, systemTheme} = useTheme()
    const displayColor = color === "blue" ? 
        (theme === "dark" || (systemTheme === "dark" && theme === "system")) ? "bg-slate-900" : "bg-blue-100"
    :  (theme === "dark" || (systemTheme === "dark" && theme === "system")) ? "bg-orange-400/[.2]" : "bg-orange-100"
  
    return <div className={`-z-10 ${borderRadius} ${displayColor} ${size} ${position} ${className}`}>
        {children}
    </div>
}

export default DecorationGeometry