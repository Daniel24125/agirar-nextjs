import DotVector from '@/components/DotVector'
import { PageTitle, PageTitleAlternative } from '@/components/UtilsGraphics'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contactos = () => {
  return <>
    {/* <HeaderContactos/> */}
    <PageTitleAlternative
        title={<p className='text-3xl md:text-6xl text-center font-bold'>CONTACTOS</p>}
      />
    <ContactSection/>
   
  </>
}

const HeaderContactos = ()=>{
  return <section className={`${getSectionClass} h-[50vh] justify-center`}>
     <div className="flex flex-col relative text-center w-[90vw] sm:w-auto text-xl md:text-3xl lg:text-5xl font-bold items-center ">
      <DotVector
      />
      <h2>Pode sempre contar com a nossa ajuda</h2>
      <h2 className='relative w-full mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600'>
        Contacte-nos
      </h2>
        <DotVector
          color='bg-blue-400'
          position='-bottom-5 -right-1'
          rotate={true}
        />
    </div>
  </section>
}

const ContactSection = ()=>{
  return <section className={`${getSectionClass} `}>
    <div className={`flex justify-evenly ${getMaxWidthClasses} flex-wrap px-5`}>
      
      <div className="flex flex-col border rounded-lg w-80 h-72 p-6 mb-5">
        <div className=' w-12 h-12 flex justify-center items-center border rounded-lg  mb-12'>
          <Mail/>
        </div>
        <p className='font-bold'>Email</p>
        <p className='text-sm'>Pode sempre contactar-nos por email</p>
        <p className='font-medium w-full text-right text-primary mt-12'><a href="mailto:agirar.2013@gmail.com">agirar.2013@gmail.com</a></p>
      </div>
      
      <div className="flex flex-col border rounded-lg w-80 p-6 mb-5">
        <div className=' w-12 h-12 flex justify-center items-center border rounded-lg  mb-12'>
          <Phone/>
        </div>
        <p className='font-bold'>Contacto Telefónico</p>
        <p className='text-sm'>Se precisar de ajuda ou quiser obter mais informações, não hesite em contactar-nos</p>
        <p className='font-medium w-full text-right text-primary mt-12'><a href="tel:912353788">912 353 788</a></p>
      </div>

      <div className="flex flex-col border rounded-lg w-80 p-6 mb-5">
        <div className=' w-12 h-12 flex justify-center items-center border rounded-lg mb-12'>
          <MapPin/>
        </div>
        <p className='font-bold'>Morada</p>
        <p className='text-sm'>Se nos quiser fazer uma visita</p>
        <p className='font-medium w-full text-right text-primary mt-12'>Rua das Mimosas, 81-A</p>
        <p className='font-medium w-full text-right text-primary '>4430-458, Vilar de Andorinho</p>
      </div>
      
    </div>
    <h2 className='pb-32 font-bold sm:text-xl text-blue-400'>Pode sempre contar com a nossa ajuda</h2>
  </section>
}
export default Contactos