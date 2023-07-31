const { Pokemon, pokemon_types } = require('../db');
const axios = require('axios');

// Utilities import
const {
  extractDetailedData
} = require('../utils/dataHandlers');

const { pokemons } = require('../controllers/pokemons')

class extraController {
  getRandomImage = async () => {
    const random = Math.floor(Math.random() * 151);
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;

    return await axios
      .get(endpoint)
      .then(response => response.data.sprites.other['official-artwork'].front_default)
      .catch(() => { throw new Error("No response from api") })
  };

  catchInPokeballFromApi = async (apiid) => {
    if (!apiid) throw new Error("Faltan datos!")
    const result = await Pokemon.findOne({
      where: { apiid },
      attributes: ['id']
    })
    if (result) throw new Error("Ya atrapaste ese pokémon!")
    
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${apiid}`;

    const pokemon = await axios
      .get(endpoint)
      .then(res => res.data)
      .then(data => extractDetailedData(data))
      .catch(() => { throw new Error("No response from api") })

    return await pokemons.catchInPokeball(pokemon)
  };

  releasePokemon = async (id) => {
    const pokemon = await Pokemon.findByPk(id)
    if (!pokemon) throw new Error("No tienes ese pokémon")

    await pokemon.destroy()
    return { id }
  };
};

const extra = new extraController();
module.exports = {
  extra
};