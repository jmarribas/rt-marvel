import './Series.css'
import Loader from '../../components/Loader/Loader';
import { useApiFetch } from '../../customHooks/useApiFetch';
import Pagination from '../../components/Pagination/Pagination';

const Series = () => {
  
  const { data, total } = useApiFetch("series")

  if (!data || data.length === 0) {
    return <Loader/>}

  return (
    <section className='series'>
      {data.map((serie) => (
        <div key={serie.id} className='serieCard'>
          <div className='serieCardImg'>
            <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.title} />
          </div>
          <div>
            <h3>{serie.title}</h3>
          </div>
        </div>
      ))}

        <Pagination total={total} />

    </section>
  )
}

export default Series