import { View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import Footer from "../../components/Footer";
import styles from "./styles";
import React from "react";
import Header from "../../components/Header";
const UserPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <Header title="User Profile" />
        <Footer navigation={navigation} selected={4} />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default UserPage;
