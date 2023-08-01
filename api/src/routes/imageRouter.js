const imageRouter = require('express').Router();

// Utilities import
const { getRandomImage } = require('../controllers/image');

// Path config
// Trae una image random de la api.
// GET http://localhost:3001/image
imageRouter.get("/", async (req, res) => {
  try {
    const image = await getRandomImage()
    return res.status(200).send({ image })
  } catch (error) {
    return res.status(204).send({ error: error.message })
  }
});

module.exports = imageRouter;