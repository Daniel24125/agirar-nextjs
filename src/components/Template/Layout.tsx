import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Toaster } from '../ui/toaster'

const Layout = ({
  children
}:{children: React.ReactNode}) => {

  
  return (<>
      <Nav/>
      {children}
      <Toaster />

      <Footer/>
  </>
  )
}

export default Layout