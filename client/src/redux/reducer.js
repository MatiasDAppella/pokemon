import * as type from './types';
import * as c from '../constants';

const initialState = {
  pokemons: [],
  search: [],
  detail: {},
  displayPokemons: [],
  displayConfig: { filter: c.ALL, sort: c.NONE, method: c.NONE }
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case type.RENDER_FIRST_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        displayPokemons: action.payload
      };
    
    case type.SORT_ASC_BY_PARAMS:
      return {
        ...state,
        displayPokemons: [...state.pokemons].sort((a, b) => a[action.payload] - b[action.payload]),
        displayConfig: { ...state.displayConfig, sort: action.payload, method: c.ASC }
      }

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        displayPokemons: [...state.pokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        displayConfig: { ...state.displayConfig, sort: action.payload, method: c.DES }
      }

    case type.SEARCH:
      return {
        ...state,
        search: [...action.payload, ...state.search],
        pokemons: [...state.pokemons, ...action.payload],
        displayPokemons: [...action.payload, ...state.search],
        displayConfig: { filter: c.SEARCH, sort: c.NONE, method: c.NONE }
      }

    default:
      return { ...state };
  };
};