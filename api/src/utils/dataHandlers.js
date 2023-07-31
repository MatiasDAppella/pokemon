const { Pokemon, Type } = require('../db');

extractStats = (statsArray) => {
  let stats = new Object();
  statsArray.forEach(e => {
    stats[e.stat.name] = e.base_stat
  })
  return stats
};

extractTypes = (typesArray) => typesArray.map(e => e.type.name);

// En esta función validaré si existe un pokémon en mi base de datos (pokeball),
// con su campo "apiid" igual al pokémon.apiid que recivo por parametro;
// de existir agrego la propiedad id correspondiente al pokémon,
// si no existe, no agrego la propiedad (esto me servirá de validación en el front).
searchInPokeball = async (pokemon) => {
  const { apiid } = pokemon;
  const result = await Pokemon.findOne({
    where: { apiid },
    attributes: ['id']
  })

  if (result) pokemon.id = result.id
  return pokemon
};

module.exports = {
  extractMinData: async (pokemon) => await searchInPokeball({
    name: pokemon.name,
    image: pokemon.sprites.other['official-artwork'].front_default,
    apiid: pokemon.id.toString(),
    types: extractTypes(pokemon.types)
  }),

  extractDetailedData: async (pokemon) => {
    const stats = extractStats(pokemon.stats)
    const types = extractTypes(pokemon.types)

    return await searchInPokeball({
      name: pokemon.name,
      image: pokemon.sprites.other['official-artwork'].front_default,
      health: stats.hp,
      stroke: stats.attack,
      defense: stats.defense,
      speed: stats.speed,
      height: pokemon.height,
      weight: pokemon.weight,
      apiid: pokemon.id.toString(),
      types
    })
  },

  validateAllProperties: (pokemon) => {
    const {
      name, image, health, stroke, defense, speed, height, weight, types
    } = pokemon

    // Retorna true en caso de que todas las propiedades existan en el objeto pokémon,
    // retorna false en caso de que alguna de las propiedades no exista.
    return (
      name&&
      image&&
      health.toString()&&
      stroke.toString()&&
      defense.toString()&&
      speed.toString()&&
      height.toString()&&
      weight.toString()&&
      types.length
    )
  },
  
  getFromPokeball: async (id) => {
    const pokemon = await Pokemon.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: Type,
        attributes: ['name'],
        through: { attributes: [] },
        as: 'types'
      }]
    })
    // Ahora quiero mapear mi array "types" para que se vea mas limpio.
    const types = pokemon.types.map(pokemonType => pokemonType.name);
    return { ...pokemon.toJSON(), types: types }
  }
};