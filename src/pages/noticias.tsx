import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectValue,SelectTrigger } from '@/components/ui/select'
import { PageTitle } from '@/components/UtilsGraphics'
import { getTheLastEvents, TEvent } from '@/utils/Events'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const Noticias = () => {
  return (
    <>
      <PageTitle
        title={<p className='text-6xl text-center font-bold'>NOTÍCIAS</p>}
      />
      <NewsList/>
    </>
  )
}

const NewsContext = React.createContext<Partial<{
  displayNews: TEvent[]
  setDisplayNews: Dispatch<SetStateAction<TEvent[]>>
  defaultList:TEvent[]
  numNewsPerPage: number
  setNumNewsPerPage: Dispatch<SetStateAction<number>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}>>({})

const NewsList = ()=>{
  const news: TEvent[] = getTheLastEvents()
  const [displayNews, setDisplayNews] = React.useState<TEvent[]>(news)
  const [numNewsPerPage, setNumNewsPerPage] = React.useState(10)
  const [currentPage, setCurrentPage] = React.useState(0)


  return <section className={`${getSectionClass} justify-center py-10`}>
    <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
      <NewsContext.Provider value={{
        displayNews, 
        setDisplayNews,
        defaultList: news,
        numNewsPerPage,
        setNumNewsPerPage,
        currentPage,
        setCurrentPage
      }}>
        <SearchNewsComponent/>
        <NewsCardsComponent/>
        <NewsPagination/>
      </NewsContext.Provider>
    </div>
  </section>
}

const SearchNewsComponent = ()=>{
  const {setDisplayNews, setNumNewsPerPage, defaultList} = React.useContext(NewsContext)
  return <div className='w-full flex justify-between'>
    <Input className='w-64' placeholder='Pesquisar título' onChange={(e)=>{
      setDisplayNews!(prev=>e.target.value === ""? defaultList! :prev.filter(n=>n.title.includes(e.target.value)))
    }}/>
    <Select defaultValue="10" onValueChange={e=>setNumNewsPerPage!(Number(e))}>
      <SelectTrigger className='w-14'>
        <SelectValue placeholder="Notícias por página"/>
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectContent>
    </Select>
  </div>
}

const NewsCardsComponent = ()=>{
  const {displayNews, numNewsPerPage, currentPage} = React.useContext(NewsContext)
  const initIndex = React.useMemo(()=>{
    return currentPage!*numNewsPerPage!
  },[currentPage,numNewsPerPage])

  return <div className='w-full flex justify-evenly flex-wrap gap-3'>
    {displayNews!.slice(initIndex, initIndex + numNewsPerPage!).map(n=>{
      return <div key={n.id} className='w-72 flex flex-col rounded-lg border p-3'>
        <div className="w-full h-32 rounded-md" style={{
          backgroundImage: `url("${n.img[0]}")`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <h5 className='text-sm mt-2'>{n.title}</h5>
        <p className='text-gray-500 text-xs'>{n.date}</p>
        <div className='w-full h-9 flex items-end justify-end'>
          <Link className="text-sm text-blue-400" href={n.href} target='_blank'>Saber mais</Link>
        </div>
      </div>
    })}
  </div>
}

const NewsPagination = ()=>{
  const {displayNews, numNewsPerPage, currentPage, setCurrentPage} = React.useContext(NewsContext)
  const totalNumPage = React.useMemo(()=>{
    return Math.ceil(displayNews!.length/numNewsPerPage!)
  }, [displayNews, numNewsPerPage])

  return <div className='w-full flex justify-center mt-7'>
    <div className='border rounded-md p-2'>
      {[...Array(totalNumPage).keys()].map((p=>{
        return <span key={`page-${p}`} onClick={()=>{
          setCurrentPage!(p)
        }} className={`px-3 cursor-pointer hover:text-blue-400 ${currentPage===p && "text-blue-400"}`}>
          {p+1}
        </span>
      }))}
    </div>
  </div>
}
export default Noticias