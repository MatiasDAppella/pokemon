import * as type from './types';
import * as c from '../constants';

const initialState = {
  pokemons: [],
  search: [],
  detail: {},
  displayPokemons: [],
  displayConfig: { filter: type.TOGGLE_ALL, sort: c.NONE, method: c.NONE }
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
        displayConfig: {...state.displayConfig, sort: action.payload, method: c.ASC }
      }

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        displayPokemons: [...state.pokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        displayConfig: {...state.displayConfig, sort: action.payload, method: c.DES }
      }

    case type.GET_SEARCH:
      return {
        ...state,
        search: [...action.payload, ...state.search],
        pokemons: [...state.pokemons, ...action.payload],
        displayPokemons: [...action.payload, ...state.search],
        displayConfig: { filter: type.TOGGLE_SEARCH, sort: c.NONE, method: c.NONE }
      }
    
    case type.TOGGLE_ALL:
      return {
        ...state,
        displayPokemons: [...state.pokemons],
        displayConfig: { filter: type.TOGGLE_ALL, sort: c.NONE, method: c.NONE }
      }

    case type.TOGGLE_SEARCH:
      return {
        ...state,
        displayPokemons: [...state.search],
        displayConfig: { filter: type.TOGGLE_SEARCH, sort: c.NONE, method: c.NONE }
      }

    case type.TOGGLE_CATCHED:
      return { ...state };

    default:
      return { ...state };
  };
};