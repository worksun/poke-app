export type PokeCardProps = {
  pokemonData: PokemonData;
};

export type PokemonData = {
  name: string;
  url: string;
};

export type Abilities = {
  ability: {
    name: string;
  };
};
export type PokemonType = {
  type: {
    name: string;
  };
};

export type PokemonDetails = {
  abilities: Abilities[];
  types: PokemonType[];
  species: { url: string };
  cries: {
    latest: string;
  };
};
