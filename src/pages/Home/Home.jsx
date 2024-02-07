import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section className='homeSection'>
      <h1>RT-MARVEL</h1>
      <h2>- El universo Marvel a tu alcance -</h2>
      <div>
        <p>Con la ayuda de la API oficial de Marvel hay un universo por descubrir. En el apartado de Personajes haz click en el nombre del personaje para verlo mas en detalle.</p>
        <p>¿A que estás esperando?</p>
      </div>
      <div className='homeCharacters'>
        <Link to={'/characters/'}>
          <h3>PERSONAJES</h3>
        </Link>
      </div>
      <div className='homeComics'>
        <Link to={'/comics/'}>
          <h3>COMICS</h3>
        </Link>
      </div>
      <div className='homeSeries'>
        <Link to={'/series/'}>
          <h3>SERIES</h3>
        </Link>
      </div>
    </section>
  )
}

export default Home