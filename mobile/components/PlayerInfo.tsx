import { Image, StyleSheet, Text, View } from "react-native";

export default function PlayerInfo({ player }: { player: Player }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/minecraft/steve.jpg")}
        style={styles.steveImage}
        width={52}
        height={52}
      />
      <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Text style={styles.nameText}>{player.playerName}</Text>
        <View style={styles.scoreContainer}>
          <Image
            source={require("../assets/images/minecraft/xp.webp")}
            style={styles.scoreImage}
          />
          <Text style={styles.scoreText}>{player.playerScore}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  steveImage: {
    width: 72,
    height: 72,
  },
  nameText: {
    color: "#ddd",
    fontSize: 32,
    fontFamily: "Minecraft",
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  scoreText: {
    color: "#ccc",
    fontFamily: "Minecraft",
    fontSize: 20,
  },
  scoreImage: {
    width: 20,
    height: 20,
  },
});
