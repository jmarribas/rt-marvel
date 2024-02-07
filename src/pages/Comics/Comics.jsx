import { useEffect, useState } from 'react'
import './Comics.css'

const Comics = () => {

  const [comics, setComics] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/comics?limit=20&offset=${page}&ts=1234&apikey=7fe82a34dafe7d3ba25d1030ce595d1a&hash=3d20528b59b9a9218c6763ce1c65efdb`);
        const result = await response.json();
        setComics(result.data.results);
      } catch (error) {
        console.error('Error con la API:' + error.message)
      }
    }
    fetchComics();

  }, [page])
  return (
    <section className='comics'>
      {comics.map((comic) => (
        <div key={comic.id} className='comicCard'>
          <div className='comicCardImg'>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          </div>
          <div>
            <h3>{comic.title}</h3>
          </div>
        </div>
      ))}
      {comics.length < 1 && (
        <div className='cargandoDiv'>
          <span className="cargando"></span>
        </div>
      )}

      {comics.length > 0 && (
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

export default Comics