const pokemonsRouter = require('express').Router();

// Controller import
const { pokemons } = require('../controllers/pokemons');

// Path config
// GET http://localhost:3001/pokemons/name?=
pokemonsRouter.get("/name", async (req, res) => {
  try {
    const { search } = req.query
    const result = await pokemons.searchPokemons(search)
    return res.status(200).send(result)

  } catch (error) {
    return res.status(204).send({ error: error.message })
  }
});

// GET http://localhost:3001/pokemons
pokemonsRouter.get("/", async (req, res) => {
  try {
    const result = await pokemons.getFirstRandomPokemons()
    return res.status(200).send(result)

  } catch (error) {
    return res.status(204).send({ error: error.message })
  }
});

// GET http://localhost:3001/pokemons/:idPokemon
pokemonsRouter.get("/:idPokemon", async (req, res) => {
  try {
    const { idPokemon } = req.params
    if (!idPokemon) throw new Error("Faltan datos!")

    const result = await pokemons.getPokemonDetail(idPokemon)
    return res.status(200).send(result)

  } catch (error) {
    switch (error.message){
      case "Faltan datos!":
        return res.status(400).send({ error: error.message })
      default:
        return res.status(204).send({ error: error.message })
    }
  }
});

// POST http://localhost:3001/pokemons
pokemonsRouter.post("/", async (req, res) => {
  try {
    const pokemonCatched = await pokemons.catchInPokeball(req.body)
    return res.status(200).send(pokemonCatched)

  } catch (error) {
    switch (error.message){
      case "Faltan datos!":
        return res.status(400).send({ error: error.message })
      default:
        return res.status(204).send({ error: error.message })
    }
  }
});

module.exports = pokemonsRouter;