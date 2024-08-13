const express = require('express');
const app = express();


const buscarPokemon = require('./routers/buscarPokemon');
const guardarPokemon = require('./routers/guardarPokemon');
const router = express.Router();

app.use(express.json());


app.use('/api/buscar-pokemon', buscarPokemon);
app.use('/api/guardar-pokemon', guardarPokemon);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
