import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types';
import './Pagination.css'
import { useOffset } from '../OffsetContext/OffsetContext'
import paginationReducer, { initialState } from './PaginationReducer'

const Pagination = ({total}) => {

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
          <button className={offset === 1 ? "navigationOff" : "pagination"} onClick={() => {
            decrementPage()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Anterior</button>

          <p>{pageNumber}</p>

          <button className={total <= offset ? "navigationOff" : "pagination"} onClick={() => {
            incrementPage()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>Siguiente</button>
        </div>
  )
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired
};

export default Pagination