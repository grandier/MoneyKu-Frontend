import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Greeter({ user }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Welcome back</Text>
        <Text style={styles.name}> {user}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 145,
    width: 200,
  },
  greeting: {
    // fontStyle: "italic",
    // fontFamily: "century-gothic",
    color: "white",
    fontSize: 15,
  },
  name: {
    // fontStyle: "italic",
    // fontFamily: "century-gothic",
    fontWeight: "800",
    color: "white",
    fontSize: 20,
    marginLeft: 40,
  },
});
