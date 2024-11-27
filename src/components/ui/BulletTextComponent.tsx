import React from 'react'

const BulletTextComponent = ({
    BulletComponent,
    text
}:{
    BulletComponent: React.ReactNode,
    text: string | React.ReactNode
}) => {
  return ( <div className="flex my-6 items-start">
    {BulletComponent}
    <h6 className='px-6 text-justify md:w-5/6'> {text} </h6>
  </div>)
}

export default BulletTextComponent