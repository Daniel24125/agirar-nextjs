import {  PageTitleAlternative, SquareGraphics } from '@/components/UtilsGraphics'
import { relatorios, TRelatorio } from '@/utils/Relatorios'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Link from 'next/link'
import React from 'react'

const Relatorios = () => {

  return <>
    <PageTitleAlternative title={<p className='text-3xl md:text-6xl text-center font-bold uppercase'>Documentos</p>} />

    <section className={`${getSectionClass} justify-center py-10`}>
        <div className={`${getMaxWidthClasses} flex flex-col`}>
            {/* @ts-ignore */}
            {Object.keys(relatorios).sort((a,b)=>b-a).map((year:string)=>{
                return <YearReportsComponent
                    key={year}
                    year={year}
                    yearData={relatorios[year]}
                />
            })}
        </div>
    </section>
  </>
}

const YearReportsComponent = ({
    yearData, 
    year
}:{
    yearData: TRelatorio[],
    year: string
})=>{
    return <div className='mb-10 flex-col flex'>
        <div className='flex gap-5 items-center'>
            <SquareGraphics
                size={20}
            />
            <h3 className='text-2xl font-bold mb-5'>{year}</h3>
        </div>
        <ul className='list-disc ml-6'>
            {yearData.map(data=>{
                return  <li key={data.title}>
                    <Link target="_blank" className='text-sm mb-2 text-blue-400 ' href={data.file}>{data.title}</Link>
                </li>
            })}
        </ul>
    </div>
}

export default Relatorios