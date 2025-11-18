import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import TooltipAbstraction from '@/components/ui/TooltipAbstraction'
import { Button } from '@/components/ui/button'
import { TEvent, getTheLastEvents } from '@/utils/Events'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import React from 'react'

const Eventos = () => {
  return <>
   <HeaderSection/>
    <ServicesColection/>
  </>
}


const HeaderSection = ()=>{
    return <section className={`${getSectionClass} h-[50vh] lg:h-[calc(100vh-64px)] justify-center`}>
      <DecorationGeometry
        color="blue"
        size="w-4/12 h-32 lg:h-64"
        position="absolute top-10 left-0"
        borderRadius="rounded-tr-3xl rounded-br-3xl"
      />
        <DecorationGeometry 
        color="orange"
        size="w-4/12 h-32 lg:h-64"
        position="absolute bottom-10 right-0"
        borderRadius="rounded-tl-3xl rounded-bl-3xl"
      />
      <div className="flex flex-col relative text-center text-xl md:text-3xl lg:text-5xl font-bold items-center ">
        <DotVector
        />
        <h2>Os Nossos Eventos</h2>
        <h2 className='relative w-full mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600'>
          A Nossa História
          <DotVector
            color='bg-blue-400'
            position='-bottom-5 -right-1'
            rotate={true}
          />
          </h2>
      </div>
    </section>
  }
  
  const ServicesColection = ()=>{
  const events: TEvent[] = getTheLastEvents()

    return <section className={`${getSectionClass} py-20`}>
      <div className={`${getMaxWidthClasses} flex justify-center gap-6 flex-wrap px-5`}>
        {events.map((s)=>{
          return <div key={s.id} className='flex flex-col p-4 rounded-lg border w-96 min-h-[400px]'>
            <div style={{
              backgroundImage: `url("${s.img}")`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} className='w-full h-[200px] rounded-lg border'></div>
            <h6 className=' font-extrabold mt-2 md:text-lg'>{s.title}</h6>
            <p className='text-xs md:text-sm mt-5 text-justify h-[50px] mb-5'>{s.desc.length > 100 ? `${s.desc.slice(0,100)}...`: s.desc}</p>
            <div className="flex justify-end w-full h-fit items-end  gap-7">
                <Button>
                    <a href={s.href} target='__blank'>Saber mais</a>
                </Button>
            </div>
          </div>
        })}
      </div>
    </section>
  }
export default Eventos