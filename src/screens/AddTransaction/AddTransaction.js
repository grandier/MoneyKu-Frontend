import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Footer from "../../components/Footer";
import styles from "./styles";
import Greeter from "../HomeScreen/components/greeter";

const AddTransaction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#7B61FF", "#30A8DF"]}
        style={styles.linearGradient}
      >
        <Text style={{ fontWeight: "normal", fontSize: 15, color: "#fff" }}>
          Add Transaction
        </Text>
      </LinearGradient>

      <Footer />
    </SafeAreaView>
  );
};

export default AddTransaction;
