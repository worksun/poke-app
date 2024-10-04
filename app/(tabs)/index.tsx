import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { getPokemonList } from "@/service/service";
import PokeCard from "@/components/PokeCard";

type Pokemon = {
  name: string;
  url: string;
};

export default function HomeScreen() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const loadPokemon = async () => {
    try {
      const pokemonData = await getPokemonList();
      setPokemonList(pokemonData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  if (loading) return <ThemedText>Loading...</ThemedText>;
  if (error) return <ThemedText>{error}</ThemedText>;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/pokelogo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pokedex</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {pokemonList.map((pokemon, index) => {
          return <PokeCard pokemonData={pokemon} />;
        })}
        <ThemedText type="defaultSemiBold">aqio</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
});
