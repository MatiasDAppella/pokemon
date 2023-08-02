import * as type from './types';

const initialState = {
  pokemons: [],
  filtered: [],
  detail: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case type.RENDER_FIRST_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      };

    default:
      return { ...state };
  };
};