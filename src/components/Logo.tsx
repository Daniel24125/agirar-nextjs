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
            {/* <div className=" w-10 h-10 rounded-full bg-orange-500"></div> */}
            <img src={`/logo/logo_b.png`} alt="" className={`h-28 mr-4 ${className}`}/>
            {/* <img src={`/logo/logo_${theme === "light" ? "b": "w"}.png`} alt="" className=' h-28 mr-4'/> */}
            {/* <h6 className=' text-2xl'>Agirar</h6> */}
        </div>
  )
}

export default Logo