import { View, Text, SafeArea, FlatList, SafeAreaView } from "react-native";
import { React, useState } from "react";
import Greeter from "./components/greeter";
import styles from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPaddingView}>
        <Greeter
          user={{
            img: "https://www.enjpg.com/img/2020/ishowspeed-2-500x500.webp",
            name: "Speed",
          }}
        />
      </View>
    </SafeAreaView>
  );
}
