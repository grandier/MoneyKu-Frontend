import { View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import Footer from "../../components/Footer";
import styles from "./styles";
import React from "react";
import Header from "../../components/Header";
const History = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <Header title="History" />
        <Footer navigation={navigation} selected={3} />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default History;
