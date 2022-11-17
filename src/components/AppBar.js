import { View, Text, Dimensions } from "react-native";
import React from "react";

import {
  NativeBaseProvider,
  HStack,
  IconButton,
  MaterialIcons,
  Icon,
  Image,
} from "native-base";
import styles from "./styles";
const AppBar = () => {
  return (
    <NativeBaseProvider>
      <HStack
        marginTop={6}
        px="4"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        width={Dimensions.get("window").width}
        maxW={Dimensions.get("window").width}
      >
        <IconButton
          icon={
            <Icon size="xl" as={MaterialIcons} name="menu" color="#ffffff" />
          }
          onPress={() => {
            console.log("hamburger pressed");
          }}
        />
        <Image style={styles.image} />
        {/* <HStack>
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="favorite"
                  size="sm"
                  color="white"
                />
              }
            />
            <IconButton
              icon={
                <Icon as={MaterialIcons} name="search" size="sm" color="white" />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="more-vert"
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack> */}
      </HStack>
    </NativeBaseProvider>
  );
};

export default AppBar;
