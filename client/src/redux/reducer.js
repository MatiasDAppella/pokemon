import * as type from './types';

const initialState = {
  pokemons: [],
  filtered: [],
  filteredBy: { filter: "", method: "" },
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
        filteredBy: { filter: action.payload, method: "asc" }
      }

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        filtered: [...state.pokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        filteredBy: { filter: action.payload, method: "des" }
      }

    case type.SEARCH:
      return {
        ...state,
        search: action.payload,
        pokemons: [...pokemons, ...action.payload],
        filtered: [...filtered, ...action.payload],
        filteredBy: { filter: "", method: "" },
      }

    default:
      return { ...state };
  };
};