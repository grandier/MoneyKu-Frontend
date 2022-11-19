import { View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import Footer from "../../components/Footer";
import styles from "./styles";
import React from "react";
import Header from "../../components/Header";
const Wallet = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <Header title="Wallets" />
        <Footer navigation={navigation} selected={1} />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default Wallet;
