import { React, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";

import Greeter from "./components/greeter";
import styles from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}

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
