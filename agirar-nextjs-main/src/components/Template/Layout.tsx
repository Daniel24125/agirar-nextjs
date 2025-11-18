import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Toaster } from '../ui/toaster'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import TooltipAbstraction from '../ui/TooltipAbstraction'

const Layout = ({
  children
}:{children: React.ReactNode}) => {
  
  return (<>
      <Nav/>
      {children}
      <Toaster />
      <TopButton/>
      <Footer/>
  </>
  )
}

const TopButton = ()=>{
  const [showToTopButton, setShowToTopButton] = React.useState(false)

  React.useEffect(()=>{
    document.addEventListener("scroll", (e)=>{
      setShowToTopButton(window.scrollY > 500)
    })
  },[])
  return <div className={`fixed right-3  transition-all duration-1000 ${showToTopButton ? "opacity-100 visible bottom-20": "opacity-0 hidden -bottom-12"}`}>
    <TooltipAbstraction title='Voltar ao topo'>
      <Button onClick={()=>window.scrollTo({
        top: 0,
        behavior: "smooth"
      })} variant="outline" size="icon">
        <ChevronUp className='text-blue-400'/>
      </Button>
    </TooltipAbstraction>
  </div>
}

export default Layout