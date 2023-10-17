import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
    const {push} = useRouter()

    return (
        <div onClick={()=>push("/")} className="flex cursor-pointer items-center justify-center gap-4">
            <div className=" w-10 h-10 rounded-full bg-orange-500"></div>
            <h6 className=' text-2xl'>Agirar</h6>
        </div>
  )
}

export default Logo