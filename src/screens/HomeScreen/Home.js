import { React, useEffect, useState, useCallback } from "react";
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
import { NativeBaseProvider, Heading, Spinner, HStack } from "native-base";

import Footer from "../../components/Footer";
import Greeter from "./components/greeter";
import styles from "./styles";
import { Header } from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import TotalBalance from "./components/TotalBalance";
import AppBar from "../../components/AppBar";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import client from "../../API/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ navigation }) {
  const [name, setName] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  // useEffect(() => {
  //   getName();
  // }, []);
  const unsubscribe = navigation.addListener("didFocus", () => {
    console.log("focussed");
  });

  async function getName() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("/getAccountDetail", {
        params: {
          idUser: id,
        },
      })
      .then(async function (response) {
        await AsyncStorage.setItem(
          "wallet",
          JSON.stringify(response.data.wallet)
        );
        setName(response.data.name);
        setTotalBalance(response.data.balance);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function getTotalIncome() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("getTotalIncome", {
        params: {
          iduser: id,
        },
      })
      .then(async function (response) {
        setTotalIncome(parseInt(response.data.queryResult[0].sum));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function getTotalExpense() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("getTotalExpense", {
        params: {
          iduser: id,
        },
      })
      .then(async function (response) {
        setTotalExpense(parseInt(response.data.queryResult[0].sum));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useFocusEffect(
    useCallback(() => {
      // getWallet();
      getTotalExpense();
      getTotalIncome();
      getName();
      return () => unsubscribe();
    }, [])
  );

  if (name === "" || totalBalance === "") {
    return (
      <NativeBaseProvider>
        <View
          style={{
            height: Dimensions.get("screen").height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" color="#7B61FF" />
            <Heading color="#7B61FF" fontSize="md">
              Loading
            </Heading>
          </HStack>
        </View>
      </NativeBaseProvider>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />

        {/* <Header /> */}
        <LinearGradient
          colors={["#7B61FF", "#30A8DF"]}
          style={styles.linearGradient}
        >
          <AppBar />
          <Greeter user={name} />
        </LinearGradient>
        <TotalBalance userBalance={totalBalance} navigation={navigation} />
        <View
          style={{
            position: "absolute",
            bottom: 120,
            justifyContent: "center",
            width: Dimensions.get("window").width * 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginHorizontal: 2,
              width: Dimensions.get("window").width * 1,
              alignSelf: "center",
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 1, y: 0.5 }}
              colors={["#B52FF8", "#F407FE"]}
              style={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
                marginHorizontal: 30,
                padding: 20,
                borderRadius: 20,
                height: 100,
                width: 150,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#fff", fontWeight: "500" }}>
                Total Expense
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Rp {totalExpense.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 0.2 }}
              end={{ x: 1, y: 0.5 }}
              colors={["#5970FF", "#40CEF2"]}
              style={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
                marginHorizontal: 30,
                padding: 20,
                borderRadius: 20,
                height: 100,
                width: 150,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "#fff", fontWeight: "500" }}>
                Total Income
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Rp {totalIncome.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </Text>
            </LinearGradient>
          </View>
        </View>
        <Footer navigation={navigation} selected={0} />
      </SafeAreaView>
    );
  }
}
