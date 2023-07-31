const typesRouter = require('express').Router();

// Controller import
const { types } = require('../controllers/types');

// Path config
// GET http://localhost:3001/types
typesRouter.get("/", async (req, res) => {
  try {
    const results = await types.getAll()
    return res.status(200).send(results)
  } catch (error) {
    return res.status(204).send({ error: error.message })
  }
});

module.exports = typesRouter;