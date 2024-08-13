const {buscarPokemon} = require('../services/buscarPokemon')

const express = require('express');

// const router = express();
const router = express.Router();

router.post('/usuarios', async (req, res) => {
    console.log(req.body)
    const {name}= req.body

    const pokemonBuscado =  await buscarPokemon(name)
    console.log(pokemonBuscado)
  res.send(pokemonBuscado);
});

module.exports = router;