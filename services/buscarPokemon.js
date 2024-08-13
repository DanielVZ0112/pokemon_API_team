const axios = require("axios");

async function buscarPokemon(nombreDePokemon) {
  const nombrePokemon = nombreDePokemon;
  let response = '';
  POKE_URL = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
  response = await axios.get(POKE_URL);
  let tipoPokemon =response.data.types.map(typeInfo => typeInfo.type.name).join(', ');
  let estadisticas = response.data.stats;
  let estadisticasPokemon =[]
  for (const stat of estadisticas) {
    const statPokemon ={
      [stat.stat.name] : stat.base_stat
    }
    estadisticasPokemon.push(statPokemon)
  }
  const objetoEstadisticasPokemon = estadisticasPokemon.reduce((acc, curr) => {
    return { ...acc, ...curr };
  
}, {});
  const data = {
    nombre: response.data.name,
    altura: response.data.height,
    peso: response.data.weight,
    tipoDePokemon:tipoPokemon,
    estadisticas: objetoEstadisticasPokemon
  };
  return data;
}

module.exports = {buscarPokemon };
