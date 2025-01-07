import { StyleSheet, Text, View } from "react-native";

export default function PlayerStats({ player }: { player: Player }) {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Text style={styles.statsText}>Saúde</Text>
        <View style={styles.progressBar}>
          <View
            style={{
              backgroundColor: "#ff0000",
              width: `${player.playerHealthLevel * 5}%`,
              height: "100%",
            }}
          />
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <Text style={styles.statsText}>Saciedade</Text>
        <View style={styles.progressBar}>
          <View
            style={{
              backgroundColor: "#000099",
              width: `${player.playerFoodLevel * 5}%`,
              height: "100%",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  statsText: {
    color: "#ffc1bd",
    fontSize: 24,
    fontFamily: "Minecraft",
  },
  progressBar: {
    width: 300,
    height: 20,
    backgroundColor: "#333",
  },
});
