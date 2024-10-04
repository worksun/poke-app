import { POKEMON_IMAGE_URL_BASE } from "@/service/service";
import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { PokeCardProps, PokemonDetails } from "./PokeCard.dtos";
import { styles } from "./PokeCardStyles";

const typeColors: { [key: string]: string } = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  flying: "#98D8D8",
  lucha: "#C03028",
  poison: "#F85888",
  bug: "#A8A878",
  normal: "#C4C4C4",
};

const PokeCard: React.FC<PokeCardProps> = ({ pokemonData }) => {
  const [abilities, setAbilities] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [soundUrl, setSoundUrl] = useState<string | null>(null);

  const imageUrl = `${POKEMON_IMAGE_URL_BASE}${getPokemonId(
    pokemonData.url
  )}.png`;

  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(pokemonData.url);
      const data: PokemonDetails = await response.json();
      const abilityNames = data.abilities.map(
        (abilityObj) => abilityObj.ability.name
      );
      const typeNames = data.types.map((typeObj) => typeObj.type.name);
      const soundUrl = data.cries.latest;
      console.log(soundUrl);
      setTypes(typeNames);
      setAbilities(abilityNames);
      setSoundUrl(soundUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const playSound = async () => {
    if (soundUrl) {
      const { sound } = await Audio.Sound.createAsync({ uri: soundUrl });
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.cardContainer} key={getPokemonId(pokemonData.url)}>
      <Image style={styles.pokemonImage} source={{ uri: imageUrl }} />
      <View>
        <View style={styles.pokemonInfo}>
          <Text style={styles.pokemonId}>#{getPokemonId(pokemonData.url)}</Text>
          <Text style={styles.pokemonName}>{pokemonData.name}</Text>
        </View>
        <View>
          {types.length > 0 && (
            <View style={styles.badgeContainer}>
              {types.map((type, index) => (
                <View
                  key={index}
                  style={[
                    styles.typeBadge,
                    { backgroundColor: getBackgroundColorByType(type) },
                  ]}
                >
                  <Text style={styles.typeText}>{capitalize(type)}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View>
          <Text style={styles.abilitiesTitle}>SKILLS:</Text>
          {abilities.length > 0
            ? abilities.map((ability, index) => (
                <Text key={index} style={styles.abilitiesText}>
                  - {capitalize(ability)}
                </Text>
              ))
            : null}
        </View>
      </View>
      <TouchableOpacity style={styles.soundButton} onPress={playSound}>
        <Ionicons name="play" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
const getPokemonId = (url: string): string => {
  return url.split("/").filter(Boolean).pop() ?? "0";
};

const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const getBackgroundColorByType = (type: string): string => {
  return typeColors[type.toLowerCase()] || "#A8A878";
};

export default PokeCard;
