import React from 'react'
import Nav from './Nav'

const Layout = ({
  children
}:{children: React.ReactNode}) => {

  
  return (
    <div className=''>
      <Nav/>
      {children}
    </div>
  )
}

export default Layout