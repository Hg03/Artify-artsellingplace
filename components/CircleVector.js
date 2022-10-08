import { View, Text, Image } from "react-native";
import {COLORS, assets } from "../constants/index";

const CircleVector = () => {
  return (
    <View style={{ width: "100%", height : "10%" }}>
      <Image
        source={assets.CirVec}
        style={{ width: 250, height: 180 }}
      ></Image>
    </View>
  );
};

export default CircleVector;