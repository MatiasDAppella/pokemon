import * as type from './types';
import * as c from '../constants';

const initialState = {
  pokemons: [],
  types: [],
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

    case type.CREATE_TYPES_IN_DATABASE:
      return {
        ...state,
        types: action.payload
      }
    
    case type.SORT_ASC_BY_PARAMS:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a[action.payload] - b[action.payload]),
        displayConfig: {...state.displayConfig, sort: action.payload, method: c.ASC }
      };

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        displayConfig: {...state.displayConfig, sort: action.payload, method: c.DES }
      };

    case type.GET_SEARCH:
      return {
        ...state,
        search: [...action.payload.filter(pokemon => state.search.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id))), ...state.search],
        pokemons: [...state.pokemons, ...action.payload.filter(pokemon => state.pokemons.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id)))],
        displayPokemons: [...action.payload.filter(pokemon => state.search.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id))), ...state.search],
        displayConfig: { filter: type.TOGGLE_SEARCH, sort: c.NONE, method: c.NONE }
      };
    
    case type.TOGGLE_ALL:
      return {
        ...state,
        displayPokemons: [...state.pokemons],
        displayConfig: { filter: type.TOGGLE_ALL, sort: c.NONE, method: c.NONE }
      };

    case type.TOGGLE_SEARCH:
      return {
        ...state,
        displayPokemons: [...state.search],
        displayConfig: { filter: type.TOGGLE_SEARCH, sort: c.NONE, method: c.NONE }
      };

    case type.TOGGLE_CATCHED:
      return { ...state,
        displayPokemons: [...state.pokemons.filter(pokemon => pokemon.id)],
        displayConfig: { filter: type.TOGGLE_CATCHED, sort: c.NONE, method: c.NONE }
      };

    case type.TOGGLE_FREE:
      return { ...state,
        displayPokemons: [...state.pokemons.filter(pokemon => !pokemon.id)],
        displayConfig: { filter: type.TOGGLE_FREE, sort: c.NONE, method: c.NONE }
      };
  
    case type.GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      };

    case type.CLEAN_DETAIL:
      return {
        ...state,
        detail: {}
      };

    case type.CATCH_POKEMON:
      return {
        ...state,
        search: [...state.search.filter(e => e.apiid != action.payload.apiid)],
        pokemons: [...state.pokemons.filter(e => e.apiid != action.payload.apiid), action.payload],
        displayPokemons: [...state.displayPokemons.filter(e => e.apiid != action.payload.apiid), action.payload],
        displayConfig: { filter: type.TOGGLE_ALL, sort: c.NONE, method: c.NONE },
        detail: action.payload
      }

    case type.RELEASE_POKEMON:
      return {
        ...state,
        search: [...state.search.map(pokemon => { 
          if (pokemon.id === action.payload.id) delete pokemon.id
          return pokemon
        }).filter(e => e.id||e.apiid)],
        pokemons: [...state.pokemons.map(pokemon => { 
          if (pokemon.id === action.payload.id) delete pokemon.id
          return pokemon
        }).filter(e => e.id||e.apiid)],
        displayPokemons: [...state.displayPokemons.map(pokemon => { 
          if (pokemon.id === action.payload.id) delete pokemon.id
          return pokemon
        }).filter(e => e.id||e.apiid)],
        displayConfig: { filter: type.TOGGLE_ALL, sort: c.NONE, method: c.NONE },
        detail: {...state.detail, id: "" }
      }

    default:
      return { ...state };
  };
};