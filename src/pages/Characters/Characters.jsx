import './Characters.css'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useApiFetch } from '../../customHooks/useApiFetch'
import Pagination from '../../components/Pagination/Pagination'

const Characters = () => {
  
  const { data } = useApiFetch("characters")

  if (!data[0] || data.length === 0) {
    return <Loader/>}

  return (
    <section className='characters'>
      {data.map((character) => (
        <div key={character.id} className='card'>
          <div className='cardImg'>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          </div>
          <div>
            <h3 >
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </h3>
            <p>{character.description}</p>
          </div>
        </div>
      ))}

        <Pagination />

    </section>
  )
}

export default Characters