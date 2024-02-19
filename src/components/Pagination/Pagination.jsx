import { useEffect, useReducer } from 'react'
import './Pagination.css'
import { useOffset } from '../OffsetContext/OffsetContext'
import paginationReducer, { initialState } from './PaginationReducer'

const Pagination = () => {

  const { offset, setOffset } = useOffset()

  const [state, dispatch] = useReducer(paginationReducer, initialState);
  const { page, pageNumber } = state;

  useEffect(() => {
    dispatch({ type: 'SET_PAGE_NUMBER', payload: `- Página ${page} -` });
  }, [page]);

  const decrementPage = () => {
    setOffset(offset - 20)
    dispatch({ type: 'SET_PAGE', payload: page - 1 });
  }
  const incrementPage = () => {
    setOffset(offset + 20)
    dispatch({ type: 'SET_PAGE', payload: page + 1 });
  }

  return (

    <div className="navigation">
          <button className={offset === 1 ? "navigationOff" : ""} onClick={() => {
            if (offset !== 1) { decrementPage() }
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Anterior</button>

          <p>{pageNumber}</p>

          <button onClick={() => {
            incrementPage()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Siguiente</button>
        </div>
  )
}

export default Pagination