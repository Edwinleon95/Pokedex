import axios from "axios";
export const searchPokemon = async (pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const data = await axios.get(url);
        return data;
    }catch (err){

    }
  };

  
  export const getPokemons = async (limit = 25, offset = 0) => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const data = await axios.get(url);
      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url) => {
    try {
      const data = await axios.get(url);
      return data;
    } catch (err) {}
  };