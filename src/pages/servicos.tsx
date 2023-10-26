import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import MemberComponent from '@/components/MemberComponent'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { TServicos, getServicos } from '@/utils/Servicos'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import { CalendarDays, Clock } from 'lucide-react'
import React from 'react'

const Servicos = () => {
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
      <h2>Torne-se Associado e Participe nas </h2>
      <h2 className='relative w-full mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600'>
         Nossas Atividades 
        <DotVector
          color='bg-blue-400'
          position='-bottom-5 -right-1'
          rotate={true}
        />
        </h2>
        <MemberComponent
            renderComponent={<Button>Tornar-me Sócio</Button>}
            title='Tornar-me Associado'
            reason='mensal'
            pagamento='transferencia'
        />
    </div>
  </section>
}

const ServicesColection = ()=>{
  return <section className={`${getSectionClass} py-20`}>
    <div className={`${getMaxWidthClasses} flex justify-center gap-6 flex-wrap px-5`}>
      {getServicos.map((s:TServicos)=>{
        return <div key={s.id} className='flex flex-col p-4 rounded-lg border w-96 h-[400px]'>
          <div style={{
            backgroundImage: `url("${s.img}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} className='w-full h-[200px] rounded-lg border'></div>
          <h6 className=' font-extrabold mt-2 md:text-lg'>{s.title}</h6>
          <p className='text-xs md:text-sm mt-5 text-justify h-1/2'>{s.desc}</p>
          <div className="flex justify-end w-full h-fit items-end  gap-7">
            <div className="flex items-center gap-3">
              <CalendarDays className='text-sm md:text-base text-primary' />
              <span> {s.day} </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className='text-sm md:text-base text-primary' />
              <span> {s.time} </span>
            </div>
          </div>
        </div>
      })}
    </div>
  </section>
}
export default Servicos