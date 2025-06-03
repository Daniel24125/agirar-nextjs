import DecorationGeometry from '@/components/DecorationGeometry'
import DotVector from '@/components/DotVector'
import { PageTitle, PageTitleAlternative } from '@/components/UtilsGraphics'
import VoluntarioComponent from '@/components/VoluntarioComponent'
import { Button } from '@/components/ui/button'
import { orgaos } from '@/utils/Team'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import { Facebook, Github, Linkedin, Mail, Phone, Twitter, User } from 'lucide-react'
import React from 'react'

const Orgaos = () => {
  return <>
    <PageTitleAlternative
        title={<>
          <p><h1 className='text-5xl font-bold'>Orgãos Sociais</h1></p>
          <p><h4 className='text-xl'>2025 - 2028</h4></p>
        </>
        }
    />
    <Team/>
  </>
}

const HeaderOrgaos = ()=>{
    return <section className={`${getSectionClass} h-[50vh] justify-center`}>
        <div className="flex flex-col relative text-center w-[90vw] sm:w-auto text-xl md:text-3xl lg:text-5xl font-bold items-center ">
            <DotVector
            />
            <h2>Conheça os nossos</h2>
            <h2 className='relative w-full mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-600'>
                Orgãos Sociais (2021-2024)
            </h2>
                <DotVector
                    color='bg-blue-400'
                    position='-bottom-5 -right-1'
                    rotate={true}
                />
            </div>
    </section>
}

const Team = ()=>{
    return <section className={`${getSectionClass} justify-center`}>
        <div className={`${getMaxWidthClasses} flex flex-col px-5`}>
            {Object.entries(orgaos).map(([key, value])=>{
                return <div key={key} className="flex flex-col mb-20">
                    <div className="flex justify-between">
                        <h2 className='lg:text-2xl font-bold'>{value.title}</h2>
                        {key==="voluntarios" && <VoluntarioComponent
                             title='Junte-se à nossa família! 😍'
                             renderComponent={<Button size="sm" variant="outline">Junte-se a Nós</Button>}
                        />}
                    </div>
                    <DecorationGeometry
                        color="blue"
                        size="w-full sm:w-1/2 h-2"
                        position=""
                        borderRadius="rounded-full"
                        className='mb-10'
                    />
                    <div className="flex gap-8 flex-wrap justify-center sm:justify-start">
                        {value.membros.map(m=>{
                            return <div key={`${value.title}_${m.id}`} className="flex">
                                {/* <div style={{
                                    background: m.photo && `url("${m.photo}")`,
                                    backgroundSize: "cover"
                                }} className={`outline outline-2 outline-offset-4  outline-orange-200 w-12 h-12 rounded-lg flex justify-center items-center ${!m.photo && "bg-slate-300"}`}>
                                    {!m.photo && <User color="#000"/>}
                                </div> */}
                                <div className="flex flex-col pl-5">
                                    <p className='max-w-[200px]'>{m.name}</p>
                                    <p className='max-w-[250px] opacity-50'>{m.function}</p>
                                    {m.contact && <div className='flex gap-2 mt-2'>
                                        {m.contact.email && <a  href={`mailto:${m.contact.email}`}>
                                            <Mail size={18} color="#73B8F8" />
                                        </a>}
                                        {m.contact.phone && <a  href={`tel:${m.contact.phone}`}>
                                            <Phone size={18} color="#73B8F8" />
                                        </a>}
                                        {m.contact.linkedin && <a  href={m.contact.linkedin} target='__blank'>
                                            <Linkedin size={18} color="#73B8F8" />
                                        </a>}
                                        {m.contact.github && <a  href={m.contact.github} target='__blank'>
                                            <Github size={18} color="#73B8F8" />
                                        </a>}
                                        {m.contact.twitter && <a  href={m.contact.twitter} target='__blank'>
                                            <Twitter size={18} color="#73B8F8" />
                                        </a>}
                                        {m.contact.facebook && <a  href={m.contact.facebook} target='__blank'>
                                            <Facebook size={18} color="#73B8F8" />
                                        </a>}
                                    </div>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </section>
}
export default Orgaos