import './Comics.css'
import Loader from '../../components/loader/Loader'
import { useApiFetch } from '../../customHooks/useApiFetch'
import Pagination from '../../components/Pagination/Pagination'

const Comics = () => {
  
  const { data } = useApiFetch("comics")

  if (!data || data.length === 0) {
    return <Loader/>}

  return (
    <section className='comics'>
      {data.map((comic) => (
        <div key={comic.id} className='comicCard'>
          <div className='comicCardImg'>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          </div>
          <div>
            <h3>{comic.title}</h3>
          </div>
        </div>
      ))}

        <Pagination />


    </section>
  )
}

export default Comics