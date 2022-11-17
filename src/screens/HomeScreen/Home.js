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

export default function Home() {
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

      <Footer />
    </SafeAreaView>
  );
}

function AppBar() {
  return (
    <NativeBaseProvider>
      <HStack
        marginTop={6}
        px="4"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={Dimensions.get("window").width}
        maxW={Dimensions.get("window").width}
      >
        <IconButton
          icon={
            <Icon size="xl" as={MaterialIcons} name="menu" color="#ffffff" />
          }
          onPress={() => {
            console.log("hamburger pressed");
          }}
        />
        <Image style={styles.image} />
        {/* <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack> */}
      </HStack>
    </NativeBaseProvider>
  );
}
