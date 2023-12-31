const { Pokemon, Type } = require('../db');
const axios = require('axios');

// Utilities import
const {
  extractDetailedData,
  validateAllProperties
} = require('../utils/dataHandlers');

const {
  searchInPokeball,
  searchInApi,
  getFromPokeball,
  getAllFromPokeball
} = require('../utils/searchHandlers');

class pokemonsController {
  getFirstRandomPokemons = async () => {
    const random = (Math.floor(Math.random() * 51)) * 20;
    const endpoint = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

    let pokemons = Array.from({ length: 36 }, (_, i) => random + i)

    let pokemonsWithInfo = new Array();
    while (pokemons.length){
      const url = endpoint(pokemons.shift())

      let pokemonData = await axios
        .get(url)
        .then(response => response.data)
        .then(data => extractDetailedData(data))
        .catch()

      pokemonsWithInfo.push(pokemonData)
    }

    const fromPokeball = await getAllFromPokeball()
    return [...fromPokeball, ...pokemonsWithInfo.filter(e => !e.id)].sort((a, b) => a.name.localeCompare(b.name))
  };

  getPokemonDetail = async (id) => {
    // Si recivo un id del tipo UUID es porque debo buscarlo en la base de datos (Pokeball),
    // la longitud de este id será mayor a 4 caracteres.
    if (id.length > 4) return await getFromPokeball(id)

    // Si recivo un id que no es UUID debo buscar sus datos directamente desde la api.
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`

    return await axios
      .get(endpoint)
      .then(response => response.data)
      .then(data => extractDetailedData(data))
      .catch()
  };

  catchInPokeball = async (pokemon) => {
    if (!validateAllProperties(pokemon)) throw new Error("Faltan datos!")
    if (pokemon.id === "") delete pokemon.id
    pokemon.name = pokemon.name.toLowerCase()

    // Una vez validados los campos, "atrapo" mi pokemon en la database (Pokeball).
    const catchedPokemon = await Pokemon.create(pokemon)

    // Ahora creo las conexiones con el modelo types.
    while (pokemon.types.length){
      const name = pokemon.types.shift()
      const type = await Type.findOne({ where: { name } })

      await catchedPokemon.addType(type)
    }

    // Busco mi pokémon desde la database (Pokeball), con sus types asociados.
    return await getFromPokeball(catchedPokemon.id)
  };

  searchPokemons = async (search) => {
    const inPokeball = await searchInPokeball(search)

    // Si alguno de mis elementos contiene un id referente a la api;
    // significa que estará repetido si lo busco nuevamente
    // en este caso no hace falta consultar a la api, devuelvo el resultado anterior.
    if (inPokeball.some(pokemon => pokemon.apiid !== 'none')) return inPokeball

    const inApi = await searchInApi(search)
    if (!inApi) return inPokeball

    return [ ...inPokeball, inApi ]
  };
};

const pokemons = new pokemonsController();
module.exports = {
  pokemons
};