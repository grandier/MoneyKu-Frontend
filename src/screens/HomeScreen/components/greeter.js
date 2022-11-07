import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Greeter({ user }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontFamily: "InterBold" }}>
          Good Morning, {user.name}
        </Text>
        <Text>Welcome back to MoneyKu!</Text>
      </View>
      <Image style={styles.image} source={{ uri: user.img }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
});
