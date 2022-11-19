import { Text, Box, HStack, IconButton, Icon, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({ title }) => {
  return (
    <>
      <LinearGradient
        colors={["#7B61FF", "#30A8DF"]}
        style={styles.linearGradient}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          {title}
        </Text>
      </LinearGradient>
    </>
  );
};

// function Example() {
//   return (
//     <Center>
//       <AppBar />
//     </Center>
//   );
// }

export default Header;
