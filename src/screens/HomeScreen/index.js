import { View, Text } from "react-native";
import React from "react";
import Greeter from "./components/greeter";

export default function HomeScreen() {
  return (
    <View>
      <Greeter
        user={{
          img: "https://www.enjpg.com/img/2020/ishowspeed-2-500x500.webp",
          name: "Speed",
        }}
      />
    </View>
  );
}
