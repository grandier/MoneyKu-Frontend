import React from "react";
import WavyHeader from "../components/WavyHeader";
import { StyleSheet, Dimensions } from "react-native";

import {
  Center,
  Box,
  Heading,
  VStack,
  Input,
  Button,
  NativeBaseProvider,
} from "native-base";

const Welcome = () => {
  return (
    <NativeBaseProvider>
      <WavyHeader customStyles={styles.svgCurve} />

      <Center w="100%" mt="48">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome back!{" "}
          </Heading>

          <VStack space={3} mt="5">
            <Button mt="2" colorScheme="indigo" rounded={100}>
              Sign In
            </Button>
            <Button mt="2" bgColor={"#fff"} variant="outline" rounded={100}>
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    // change the color property for better output
    color: "#fff",
    textAlign: "center",
    marginTop: 35,
  },
});

export default Welcome;
