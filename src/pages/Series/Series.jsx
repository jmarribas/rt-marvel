import { useEffect, useState } from 'react'
import './Series.css'

const Series = () => {

  const [series, setSeries] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/series?limit=20&offset=${page}&ts=1234&apikey=7fe82a34dafe7d3ba25d1030ce595d1a&hash=3d20528b59b9a9218c6763ce1c65efdb`);
        const result = await response.json();
        setSeries(result.data.results);
      } catch (error) {
        console.error('Error con la API:' + error.message)
      }
    }
    fetchSeries();

  }, [page])
  return (
    <section className='series'>
      {series.map((serie) => (
        <div key={serie.id} className='serieCard'>
          <div className='serieCardImg'>
            <img src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt={serie.title} />
          </div>
          <div>
            <h3>{serie.title}</h3>
          </div>
        </div>
      ))}
      {series.length < 1 && (
        <div className='cargandoDiv'>
          <span className="cargando"></span>
        </div>
      )}

      {series.length > 0 && (
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

export default Series