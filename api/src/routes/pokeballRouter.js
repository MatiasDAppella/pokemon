const pokeballRouter = require('express').Router();

// Controller import
const { pokeball } = require('../controllers/pokeball');

// Path config
// GET http://localhost:3001/pokeball
pokeballRouter.get("/", async (req, res) => {
  try {
    const result = await pokeball.getAllPokemonsFromPokeball()
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
});

// Postea un pokémon con sus datos directamente de la api.
// POST http://localhost:3001/pokeball/:apiid
pokeballRouter.post("/:apiid", async (req, res) => {
  try {
    const { apiid } = req.params
    const result = await pokeball.catchInPokeballFromApi(apiid)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
});

// Elimina un pokémon de la database; devuelve el id del pokémon eliminado
// para su posterior actualización en el estado global de redux.
// DELETE http://localhost:3001/pokeball
pokeballRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const releasedPokemon = await pokeball.releasePokemon(id)
    return res.status(200).send(releasedPokemon)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
});

module.exports = pokeballRouter;