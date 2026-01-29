import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Toaster } from '../ui/toaster'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import TooltipAbstraction from '../ui/TooltipAbstraction'

const Layout = ({
  children
}: { children: React.ReactNode }) => {

  return (<>
    <Nav />
    {children}
    <Toaster />
    <TopButton />
    <Footer />
  </>
  )
}

const TopButton = () => {
  const [showToTopButton, setShowToTopButton] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setShowToTopButton(window.scrollY > 500)
    }
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return <div className={`fixed right-3 z-50 transition-all duration-1000 ${showToTopButton ? "opacity-100 visible bottom-32 md:bottom-20" : "opacity-0 hidden -bottom-12"}`}>
    <TooltipAbstraction title='Voltar ao topo'>
      <Button onClick={() => window.scrollTo({
        top: 0,
        behavior: "smooth"
      })} variant="outline" size="icon">
        <ChevronUp className='text-blue-400' />
      </Button>
    </TooltipAbstraction>
  </div>
}

export default Layout