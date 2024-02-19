export const initialState = { page: 1, pageNumber: '' };

const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_PAGE_NUMBER':
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export default paginationReducer;