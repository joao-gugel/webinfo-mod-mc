import ConditionIcon from "@/components/ConditionIcon";
import Dead from "@/components/Dead";
import PlayerInfo from "@/components/PlayerInfo";
import PlayerStats from "@/components/PlayerStats";
import WorldInfo from "@/components/WorldInfo";
import { useEffect, useState } from "react";

const RainingGif = require("../assets/images/minecraft/rain-minecraft.gif");

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const bgImage = {
  overworld: require("../assets/images/minecraft/overworld.webp"),
  the_nether: require("../assets/images/minecraft/nether.png"),
  end: require("../assets/images/minecraft/end.webp"),
};

export default function HomeScreen() {
  const [connected, setConnected] = useState(false);
  const [playerData, setPlayerData] = useState<Player | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.0.6:8080");

    ws.onopen = () => setConnected(true);

    ws.onmessage = (event) => {
      const data = event.data;

      if (data.startsWith("{")) {
        try {
          setPlayerData(JSON.parse(data).data);
        } catch (error) {
          console.error("Erro ao fazer parse:", error);
        }
      } else {
        console.warn("Mensagem não JSON recebida:", data);
      }
    };
  }, []);

  if (!connected)
    return (
      <SafeAreaView style={styles.emptyDataContainer}>
        <Text style={styles.text}>Esperando conexão...</Text>
      </SafeAreaView>
    );

  if (!playerData)
    return (
      <SafeAreaView style={styles.emptyDataContainer}>
        <Text style={styles.text}>Nenhum dado encontrado...</Text>
      </SafeAreaView>
    );

  if (!playerData.isAlive) return <Dead />;

  const condition = playerData.isInWater || playerData.isOnFire;

  return (
    <ImageBackground
      source={bgImage["overworld"]}
      style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
    >
      <ImageBackground
        source={
          playerData.isRaining || playerData.isThundering ? RainingGif : ""
        }
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.darkOverlay}>
          <SafeAreaView>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <View style={styles.playerContainer}>
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <PlayerInfo player={playerData} />
                  <PlayerStats player={playerData} />
                </View>
                {condition && (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 6,
                      alignItems: "center",
                    }}
                  >
                    <ConditionIcon
                      condition={playerData.isInWater ? "inWater" : "onFire"}
                    />
                    <Text style={styles.text}>
                      {playerData.isInWater ? "Molhado" : "Pegando fogo"}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.worldContainer}>
                <WorldInfo player={playerData} />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  darkOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    width: "100%",
  },
  emptyDataContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  playerContainer: {
    padding: 20,
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  worldContainer: {
    padding: 20,
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  steveImage: {
    width: 64,
    height: 64,
  },
  text: {
    color: "#ddd",
    fontFamily: "Minecraft",
    fontSize: 24,
  },
});
