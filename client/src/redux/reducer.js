import * as type from './types';

const initialState = {
  pokemons: [],
  filtered: [],
  filteredBy: "none",
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
        filteredBy: action.payload
      }

    case type.SORT_DES_BY_PARAMS:
      return {
        ...state,
        filtered: [...state.pokemons].sort((a, b) => b[action.payload] - a[action.payload]),
        filteredBy: action.payload
      }

    default:
      return { ...state };
  };
};