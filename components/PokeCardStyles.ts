import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    display: "flex",
    elevation: 5,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  pokemonInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  pokemonImage: {
    height: 100,
    marginBottom: 10,
    width: 100,
  },
  pokemonName: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  abilitiesTitle: {
    fontWeight: "bold",
  },
  pokemonId: {
    color: "#C4C4C4",
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 8,
  },
  abilitiesText: {
    color: "#666",
    fontSize: 14,
  },
  typeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  typeBadge: {
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 4,
    padding: 5,
  },
  badgeContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    marginTop: 5,
  },
  soundButton: {
    display: "flex",
    backgroundColor: "#fde269",
    borderRadius: 5,
    padding: 5,
    right: 0,
    marginRight: 20,
    position: "absolute",
  },
});
