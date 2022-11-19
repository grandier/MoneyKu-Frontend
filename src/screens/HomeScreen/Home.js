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
import {
  NativeBaseProvider,
  Box,
  HStack,
  Center,
  Icon,
  IconButton,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "react-native-vector-icons";

import Footer from "../../components/Footer";
import Greeter from "./components/greeter";
import styles from "./styles";
import { Header } from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import TotalBalance from "./components/TotalBalance";
import AppBar from "../../components/AppBar";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* <Header /> */}
      <LinearGradient
        colors={["#7B61FF", "#30A8DF"]}
        style={styles.linearGradient}
      >
        <AppBar />
        <Greeter user={{ name: "Aidan Azkafaro" }} />
      </LinearGradient>
      <TotalBalance />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
