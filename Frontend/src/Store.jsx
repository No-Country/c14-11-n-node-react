import React from 'react'

const initialState = {
  allMovies: [],
  allSeries: [],
  movieFilters: [],
  tvFilters: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        allMovies: action.payload,
      }
    case 'GET_MORE_MOVIES':
      return {
        ...state,
        allMovies: [...state.allMovies, ...action.payload],
      }
    case 'GET_MOVIES_FILTERED':
      return {
        ...state,
        allMovies: action.payload,
      }
    case 'GET_MOVIE_FILTERS':
      return {
        ...state,
        movieFilters: action.payload,
      }
    case 'GET_TV':
      return {
        ...state,
        allSeries: action.payload,
      }
    case 'GET_MORE_SERIES':
      return {
        ...state,
        allSeries: [...state.allSeries, ...action.payload],
      }
    case 'GET_TV_FILTERED':
      return {
        ...state,
        allSeries: action.payload,
      }
    case 'GET_TV_FILTERS':
      return {
        ...state,
        tvFilters: action.payload,
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
