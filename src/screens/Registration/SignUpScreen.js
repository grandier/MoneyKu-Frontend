import { View, Text } from "react-native";
import React from "react";
import WavyHeader from "../../components/WavyHeader";
import { StyleSheet, Dimensions } from "react-native";

import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  NativeBaseProvider,
} from "native-base";

const SignUpScreen = () => {
  return (
    <NativeBaseProvider>
      <WavyHeader customStyles={styles.svgCurve} />

      <Center w="100%" mt="24">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Sign Up
          </Heading>

          <VStack space={3} mt="8">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input variant="underlined" type="email" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input variant="underlined" type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input variant="underlined" type="password" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mobile Number</FormControl.Label>
              <Input
                variant="underlined"
                keyboardType="numeric"
                placeholder="+62+"
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
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
export default SignUpScreen;
