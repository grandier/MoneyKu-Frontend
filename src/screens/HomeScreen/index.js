import { View, Text, SafeArea, FlatList } from "react-native";
import { React, useState } from "react";
import Greeter from "./components/greeter";

export default function Home() {
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
