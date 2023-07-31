const extraRouter = require('express').Router();

// Controller import
const { extra } = require('../controllers/extra');

// Path config
// Trae una image random de la api.
// GET http://localhost:3001/extra/image
extraRouter.get("/image", async (req, res) => {
  try {
    const image = await extra.getRandomImage()
    return res.status(200).send({ image })
  } catch (error) {
    return res.status(204).send({ error: error.message })
  }
});

// Postea un pokémon con sus datos directamente de la api.
// POST http://localhost:3001/extra/post/:apiid
extraRouter.post("/:apiid", async (req, res) => {
  try {
    const { apiid } = req.params
    const result = await extra.catchInPokeballFromApi(apiid)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
});

// Elimina un pokémon de la database; devuelve el id del pokémon eliminado
// para su posterior actualización en el estado global de redux.
// DELETE http://localhost:3001/extra/delete
extraRouter.delete("/", async (req, res) => {
  try {
    const { id } = req.body
    const releasedPokemon = await extra.releasePokemon(id)
    return res.status(200).send(releasedPokemon)
  } catch (error) {
    return res.status(400).send({ error: error.message })
  }
});

module.exports = extraRouter;