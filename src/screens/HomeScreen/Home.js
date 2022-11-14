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
import Footer from "../../components/Footer";
import Greeter from "./components/greeter";
import styles from "./styles";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      {/* <Header /> */}
      <View>
        <View style={styles.parent}>
          <View style={styles.child}>
            <Greeter
              user={{
                img: "https://www.enjpg.com/img/2020/ishowspeed-2-500x500.webp",
                name: "Speed",
              }}
            />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
}
