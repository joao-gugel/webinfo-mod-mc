import { Image } from "react-native";

export default function ConditionIcon(condition: {
  condition: "inWater" | "onFire";
}) {
  const waterIcon = require("../assets/images/minecraft/water-bucket.webp");
  const fireIcon = require("../assets/images/minecraft/fire.webp");

  return (
    <Image
      source={condition.condition === "inWater" ? waterIcon : fireIcon}
      style={{ width: 52, height: 52 }}
    />
  );
}
