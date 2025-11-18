import Image from 'next/image'
import React  from 'react'
import BulletPoint from "@/assets/home/psicose-bullet.jpg"
import DecorationGeometry from './DecorationGeometry'
import { getSectionClass } from '@/utils/UtilClasses'

export const SquareGraphics = ({
    size,
    color="#4267B280",
    className,
    ...props
}:{
    size: number,
    color?: string,
    className?: string
    props?: any
}) => {
  return (<div className={className} {...props}>
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
      position="absolute left-0 top-[calc(50%-20px)] z-0"
      borderRadius="rounded-tr-3xl rounded-br-3xl sm:rounded-tl-none sm:rounded-bl-none "
      className=" z-30 flex justify-center flex-col opacity-50 mt-24 sm:mt-0 lg:flex-row lg:justify-end items-center gap-8 sm:pr-10"
    />
  </section>
}

export const PageTitleAlternative = ({
  title
}:{
  title: React.ReactNode
})=>{
  return <section className={`${getSectionClass}  h-[50vh] justify-center items-center`}>
    <div className='relative z-40 text-center uppercase'>
      {title}
    </div>
    <DecorationGeometry
      color="orange"
      size="w-[calc(50%)] h-48"
      position="absolute right-0  z-0"
      borderRadius="rounded-tl-3xl rounded-bl-3xl bg-orange-100"
    />
    <DecorationGeometry
      color="blue"
      size="w-[calc(50%)] h-48"
      position="absolute left-0  z-0"
      borderRadius="rounded-tr-3xl rounded-br-3xl sm:rounded-tl-none sm:rounded-bl-none  bg-blue-100"
      className=" z-30 flex justify-center flex-col opacity-50 sm:mt-0 lg:flex-row lg:justify-end items-center gap-8 sm:pr-10"
    />
  </section>
}


export const HandHeartIcon = ({width, height}:{width?:number, height?:number})=>{
  return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>
  </svg>
}