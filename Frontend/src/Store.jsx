import React from 'react'

const initialState = {
  allMovies: [],
  movies: [],
  filters: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
        movies: action.payload,
      }
    case 'GET_MOVIES_FILTERED':
      return {
        ...state,
        movies: action.payload,
      }

    default:
      return { ...state }
  }
}

const defaultDispatch = () => initialState

const Store = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
})

function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }} {...props} />
}

export { Store, StoreProvider }
