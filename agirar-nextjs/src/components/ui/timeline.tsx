import React from 'react'



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yQj5EgHap5q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const Timeline = ({
    children
}:{
    children: React.ReactNode
}) => {
    
    if(!children) throw new Error("Please provide child components")
    if(!Array.isArray(children)) return children
    
    return (
      <div className="p-6 sm:p-10 lg:w-1/2">
        <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
           {children.map((item, index)=>{
            return <React.Fragment key={index}>
                {item}
            </React.Fragment>
           })}
          
        </div>
      </div>
    )
  }



export const TimelineItem = ({
    title, 
    desc
}:{
    title: string, 
    desc:string
})=>{
    const childRef = React.useRef(null)

    return  (
        <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-orange-400 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="text-lg font-bold -mt-1">{title}</div>
            <div className="text-gray-600 dark:text-gray-400">{desc}</div>
          </div>
    )
}

export default Timeline