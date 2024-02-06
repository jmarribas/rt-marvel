import { Link, useParams } from 'react-router-dom'
import './CharacterId.css'
import { useEffect, useState } from 'react';

const CharacterId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?limit=20&offset=1&ts=1234&apikey=7fe82a34dafe7d3ba25d1030ce595d1a&hash=3d20528b59b9a9218c6763ce1c65efdb`);
        const result = await response.json();
        setCharacter(result.data.results[0]);
      } catch (error) {
        console.error('Error con la API:' + error.message)
      }
    }
    fetchCharacters();

  }, [id])

  return (
    <div className='character'>
      <h2>{character.name}</h2>
      <Link to='/characters/'>- Volver a personajes -</Link>
      <div className='characterImg'>
        {character && character.thumbnail && (
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        )}
      </div>
      <p>{character.description}</p>

      <h3>Comics:</h3>
      <div className='characterComics'>
        {character && character.comics && (
          character.comics.items.map((item) =>
            <p key={item.resourceURI}>{item.name}</p>)
        )}
      </div>

      <h3>Series:</h3>
      <div className='characterSeries'>
        {character && character.series && (
          character.series.items.map((item) =>
            <p key={item.resourceURI}>{item.name}</p>)
        )}
      </div>

      <h3>Enlaces:</h3>
      <div className='characterLinks'>
        {character && character.urls && (
          character.urls.map((item) =>
            <a target="_blank" rel='noreferrer' key={item.url} href={item.url}>{item.type}</a>)
        )}
      </div>
    </div>
  )
}

export default CharacterId