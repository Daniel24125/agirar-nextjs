import { useRouter } from 'next/router'
import React from 'react'
import { useTheme } from "next-themes"

const Logo = ({
    className
}:{
    className?: string
}) => {
    const {push} = useRouter()
    const { theme } = useTheme()

    return (
        <div onClick={()=>push("/")} className="cursor-pointer">
            <img src={`/logo/logo_b.png`} alt="" className={`h-28 ${className}`}/>           
        </div>
  )
}

export default Logo