import { useEffect, useState } from 'react'
import './Characters.css'
import { Link } from 'react-router-dom'

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?limit=20&offset=${page}&ts=1234&apikey=7fe82a34dafe7d3ba25d1030ce595d1a&hash=3d20528b59b9a9218c6763ce1c65efdb`);
        const result = await response.json();
        setCharacters(result.data.results);
      } catch (error) {
        console.error('Error con la API:' + error.message)
      }
    }
    fetchCharacters();

  }, [page])
  return (
    <section className='characters'>
      {characters.map((character) => (
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
      {characters.length < 1 && (
        <div className='cargandoDiv'>
          <span className="cargando"></span>
        </div>
      )}

      {characters.length > 0 && (
        <div className="navigation">
          <button className={page === 1 ? "navigationOff" : ""} onClick={() => {
            if (page !== 1) { setPage(page - 20) }
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Anterior</button>
          <button onClick={() => {
            setPage(page + 20)
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Siguiente</button>
        </div>
      )}

    </section>
  )
}

export default Characters