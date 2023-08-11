import * as type from './types';
import * as c from '../constants';

const initialState = {
  error: "",
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
    
    case type.GET_SEARCH:
      return {
        ...state,
        search: [...action.payload.filter(pokemon => state.search.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id))), ...state.search],
        pokemons: [...state.pokemons, ...action.payload.filter(pokemon => state.pokemons.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id)))],
        displayPokemons: [...action.payload.filter(pokemon => state.search.every(e => e.apiid !== pokemon.apiid && (e.id !== pokemon.id || !pokemon.id))), ...state.search],
        displayConfig: { filter: type.TOGGLE_SEARCH, sort: c.NONE, method: c.NONE },
        error: ""
      };

    case type.ADD_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload
      }

    case type.REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        error: ""
      }
    
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
        pokemons: [ action.payload,...state.pokemons.filter(e => e.apiid != action.payload.apiid)],
        displayPokemons: [ action.payload,...state.displayPokemons.filter(e => e.apiid != action.payload.apiid)],
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
    

    // sort methods =====================================================================================
    // stroke -------------------------------------------------------------------------------------------
    case type.SORT_ASC_BY_STROKE:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a.stroke - b.stroke),
        displayConfig: {...state.displayConfig, sort: "stroke", method: "ASC" }
      };

    case type.SORT_DES_BY_STROKE:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b.stroke - a.stroke),
        displayConfig: {...state.displayConfig, sort: "stroke", method: "DES" }
      };
    
    // defense ------------------------------------------------------------------------------------------
    case type.SORT_ASC_BY_DEFENSE:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a.defense - b.defense),
        displayConfig: {...state.displayConfig, sort: "defense", method: "ASC" }
      };

    case type.SORT_DES_BY_DEFENSE:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b.defense - a.defense),
        displayConfig: {...state.displayConfig, sort: "defense", method: "DES" }
      };
    
    // health -------------------------------------------------------------------------------------------
    case type.SORT_ASC_BY_HEALTH:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a.health - b.health),
        displayConfig: {...state.displayConfig, sort: "health", method: "ASC" }
      };

    case type.SORT_DES_BY_HEALTH:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b.health - a.health),
        displayConfig: {...state.displayConfig, sort: "health", method: "DES" }
      };

    // speed --------------------------------------------------------------------------------------------
    case type.SORT_ASC_BY_SPEED:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a.speed - b.speed),
        displayConfig: {...state.displayConfig, sort: "speed", method: "ASC" }
      };

    case type.SORT_DES_BY_SPEED:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b.speed - a.speed),
        displayConfig: {...state.displayConfig, sort: "speed", method: "DES" }
      };

    // alphabetically -----------------------------------------------------------------------------------
    case type.SORT_ASC_ALPHABETICALLY:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => a.name.localeCompare(b.name)),
        displayConfig: {...state.displayConfig, sort: "alpha", method: "ASC" }
      };

    case type.SORT_DES_ALPHABETICALLY:
      return {
        ...state,
        displayPokemons: [...state.displayPokemons].sort((a, b) => b.name.localeCompare(a.name)),
        displayConfig: {...state.displayConfig, sort: "alpha", method: "DES" }
      };


    // DEFAULT CASE =====================================================================================
    default:
      return { ...state };
  };
};