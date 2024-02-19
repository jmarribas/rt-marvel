import { Link, useParams } from 'react-router-dom'
import './CharacterId.css'
import { useApiFetch } from '../../customHooks/useApiFetch';
import Loader from '../loader/Loader';

const CharacterId = () => {
  const { id } = useParams();
  const { data } = useApiFetch(`characters/${id}`)

  if (!data[0] || data.length === 0) {
    return <Loader/>}

  const character = data[0]

  return (
    <div className='character'>
      <h2>{character.name}</h2>
      <Link to='/characters/'>- Volver a personajes -</Link>
      <div className='characterImg'>
        {character.thumbnail && (
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        )}
      </div>
      <p>{character.description}</p>

      <h3>Comics:</h3>
      <div className='characterComics'>
        {character.comics && (
          character.comics.items.map((item) =>
            <p key={item.resourceURI}>{item.name}</p>)
        )}
      </div>

      <h3>Series:</h3>
      <div className='characterSeries'>
        {character.series && (
          character.series.items.map((item) =>
            <p key={item.resourceURI}>{item.name}</p>)
        )}
      </div>

      <h3>Enlaces:</h3>
      <div className='characterLinks'>
        {character.urls && (
          character.urls.map((item) =>
            <a target="_blank" rel='noreferrer' key={item.url} href={item.url}>{item.type}</a>)
        )}
      </div>
    </div>
  )
}

export default CharacterId