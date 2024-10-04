export const POKEMON_IMAGE_URL_BASE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const getPokemonList = async (limit = 20) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching Pokémon data");
  }

  const data = await response.json();
  return data.results;
};
