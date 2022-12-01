import { React, useEffect, useState } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import TotalBalance from "./components/TotalBalance";
import AppBar from "../../components/AppBar";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import client from "../../API/client";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
 const [name, setName] = useState("")
 const [totalBalance, setTotalBalance] = useState("")

  const getName = async () => {
    const id = await AsyncStorage.getItem("id");
    console.log(id);

    client
      .get("/getAccountDetail", {
        params: {
          idUser: id,
        },
        })
        .then(async function (response) {
          console.log(response.status);
          console.log(response.data.name);
          console.log(response.data.balance);
          await AsyncStorage.setItem("wallet", JSON.stringify(response.data.wallet));
          console.log(await AsyncStorage.getItem("wallet"));
          setName(response.data.name);
          setTotalBalance(response.data.balance);
        })
      .catch(function (error) {
        console.error(error);
        console.log("masuk catch");
      });
  };

  useEffect( () => {
    getName();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* <Header /> */}
      <LinearGradient
        colors={["#7B61FF", "#30A8DF"]}
        style={styles.linearGradient}
      >
        <AppBar />
        <Greeter user={ name } />
      </LinearGradient>
      <TotalBalance userBalance={totalBalance} />
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
            <Pressable>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Check History
              </Text>
            </Pressable>
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
            }}
          >
            <Text style={{ fontSize: 15, color: "#fff", fontWeight: "900" }}>
              Income
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
              Rp
            </Text>
          </LinearGradient>
        </View>
      </View>
      <Footer navigation={navigation} selected={0} />
    </SafeAreaView>
  );
}
