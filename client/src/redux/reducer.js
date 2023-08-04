import * as type from './types';
import * as c from '../constants';

const initialState = {
  pokemons: [],
  filtered: [],
  filteredBy: { filter: c.NONE, method: c.DES },
  search: [],
  detail: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case type.RENDER_FIRST_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filtered: action.payload
      };
    
    case type.SORT_ASC_BY_PARAMS:
      return {
        ...state,
        filtered: [...state.pokemons].sort((a, b) => a[action.payload] - b[action.payload]),
        filteredBy: { filter: action.payload, method: c.ASC }
      }

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        filtered: [...state.pokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        filteredBy: { filter: action.payload, method: c.DES }
      }

    case type.SEARCH:
      return {
        ...state,
        search: action.payload,
        pokemons: [...pokemons, ...action.payload],
        filtered: [...filtered, ...action.payload],
        filteredBy: { filter: c.NONE, method: c.DES }
      }

    default:
      return { ...state };
  };
};