import { View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import Footer from "../../components/Footer";
import styles from "./styles";
import React, { useState } from "react";
import Header from "../../components/Header";
import FilterForm from "./components/FilterForm";
import { useFonts } from "expo-font";

const TransactionHistory = ({ navigation }) => {
  const [loaded] = useFonts({
    CenturyGothic: require("../../../assets/fonts/CenturyGothic.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Header title="Transactions History" />
        {/* <View style={styles.cardWrapper}>
          <DatePicker />
        </View> */}
        <FilterForm navigation={navigation} />

        <Footer navigation={navigation} selected={3} />
      </NativeBaseProvider>
    </View>
  );
};

export default TransactionHistory;
