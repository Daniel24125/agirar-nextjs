import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectValue,SelectTrigger } from '@/components/ui/select'
import { PageTitle } from '@/components/UtilsGraphics'
import { getTheLastEvents, TEvent } from '@/utils/Events'
import { getMaxWidthClasses, getSectionClass } from '@/utils/UtilClasses'
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
}>>({})

const NewsList = ()=>{
  const news: TEvent[] = getTheLastEvents()
  const [displayNews, setDisplayNews] = React.useState<TEvent[]>(news)
  const [numNewsPerPage, setNumNewsPerPage] = React.useState(5)


  return <section className={`${getSectionClass} justify-center py-10`}>
    <div className={`${getMaxWidthClasses} flex flex-col gap-10`}>
      <NewsContext.Provider value={{
        displayNews, 
        setDisplayNews,
        defaultList: news,
        numNewsPerPage,
        setNumNewsPerPage
      }}>
        <SearchNewsComponent/>
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
    <Select defaultValue="5" onValueChange={e=>setNumNewsPerPage!(Number(e))}>
      <SelectTrigger className='w-14'>
        <SelectValue placeholder="Notícias por página"/>
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectContent>
    </Select>
  </div>
}

export default Noticias