import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" activeclassname="active">HOME</NavLink>
      <NavLink to="/characters" activeclassname="active">PERSONAJES</NavLink>
      <NavLink to="/comics" activeclassname="active">COMICS</NavLink>
      <NavLink to="/series" activeclassname="active">SERIES</NavLink>
    </nav>
  )
}

export default Nav