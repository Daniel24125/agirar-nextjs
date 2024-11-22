import Image from 'next/image'
import React  from 'react'
import BulletPoint from "@/assets/home/psicose-bullet.jpg"
import DecorationGeometry from './DecorationGeometry'
import { getSectionClass } from '@/utils/UtilClasses'

export const SquareGraphics = ({
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

export const PsicoseBullet = ({
  size,
 ...props
}: {
  size: number,
  props?: any
})=>{
  return <Image width={size} height={size} src={BulletPoint} alt="Bullet de psicose"/>
}

export const PageTitle = ({
  title
}:{
  title: React.ReactNode
})=>{
  return <section className={`${getSectionClass}  h-[50vh] justify-center items-center h-`}>
    <div className='relative z-40 text-center'>
      {title}
    </div>
    <DecorationGeometry
      color="orange"
      size="w-[90vw] sm:w-[calc(50%+30px)] h-40"
      position="absolute right-0 top-[calc(50%+20px)] -translate-y-full z-0"
      borderRadius="rounded-tl-3xl rounded-bl-3xl"
    />
    <DecorationGeometry
      color="blue"
      size="w-[90vw] sm:w-[calc(50%+30px)] h-40"
      position="absolute sm:left-0 top-[calc(50%-20px)] z-0"
      borderRadius="rounded-3xl sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-tl-none sm:rounded-bl-none "
      className=" z-30 flex justify-center flex-col opacity-50 mt-24 sm:mt-0 lg:flex-row lg:justify-end items-center gap-8 sm:pr-10"
    />
  </section>
}