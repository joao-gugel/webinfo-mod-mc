import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Dead() {
  return (
    <View style={styles.darkOverlay}>
      <SafeAreaView>
        <View style={styles.emptyDataContainer}>
          <Text style={styles.text}>O jogador está morto!</Text>
        </View>
      </SafeAreaView>
    </View>
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
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Minecraft",
  },
});
