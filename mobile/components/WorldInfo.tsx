import { StyleSheet, Text, View } from "react-native";

export default function WorldInfo({ player }: { player: Player }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.worldNameText}>{player.dimensionName}</Text>
        <View>
          <Text style={styles.coordinatesText}>
            X: {player.worldPosition.x.toFixed(2)}
          </Text>
          <Text style={styles.coordinatesText}>
            Y: {player.worldPosition.y.toFixed(2)}
          </Text>
          <Text style={styles.coordinatesText}>
            Z: {player.worldPosition.z.toFixed(2)}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.coordinatesText}>
          {player.isClearWeather
            ? "Céu limpo"
            : player.isThundering
            ? "Trovejando"
            : "Chovendo"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
    gap: 16,
  },
  worldNameText: {
    color: "#ddd",
    fontSize: 32,
    fontFamily: "Minecraft",
  },
  coordinatesText: {
    color: "#ccc",
    fontFamily: "Minecraft",
    fontSize: 20,
  },
  weatherText: {
    color: "#ccc",
    fontFamily: "Minecraft",
    fontSize: 20,
  },
});
