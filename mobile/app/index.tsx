import PlayerInfo from "@/components/PlayerInfo";
import { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";

const playerMockData = {
  dimensionName: "overworld",
  playerName: "Dev",
  worldPosition: {
    x: -38.560056968657804,
    y: 70.0,
    z: -27.662255227075484,
  },
  playerHealthLevel: 20.0,
  playerFoodLevel: 20,
  playerScore: 0,
  isInWater: false,
  isOnFire: false,
  isSleeping: false,
  isAlive: true,
  isRaining: true,
  isThundering: true,
  isClearWeather: false,
};

const bgImage = {
  overworld: require("../assets/images/minecraft/overworld.webp"),
  nether: require("../assets/images/minecraft/nether.png"),
  end: require("../assets/images/minecraft/end.webp"),
};

export default function HomeScreen() {
  const [playerData, setPlayerData] = useState<Player | null>(playerMockData);

  useEffect(() => {}, []);

  if (!playerData)
    return (
      <SafeAreaView style={styles.emptyDataContainer}>
        <Text style={styles.text}>Aguardando dados do jogador...</Text>
      </SafeAreaView>
    );

  return (
    <ImageBackground
      source={bgImage["overworld"]}
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <View style={styles.darkOverlay}>
        <SafeAreaView>
          <View style={styles.container}>
            <PlayerInfo player={playerData} />
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  darkOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    height: "100%",
    width: "100%",
  },
  emptyDataContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    height: "100%",
  },
  steveImage: {
    width: 64,
    height: 64,
  },
  text: {
    color: "#333",
    fontFamily: "Minecraft",
    fontSize: 20,
  },
});
