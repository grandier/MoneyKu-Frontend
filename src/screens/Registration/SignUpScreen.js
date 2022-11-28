import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import WavyHeader from "../../components/WavyHeader";
import { StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import client from "../../API/client";
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

const SignUpScreen = ({ navigation }) => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUp = async () => {
    client
      .post("/register", {
        name: signUpData.name,
        email: signUpData.name,
        password: signUpData.password,
      })
      .then(function (response) {
        console.log(response.status);
        if (response.data.message == "User Created") {
          navigation.navigate("Signin");
        }
        else{
          setSignUpData.name = "";
          setSignUpData.email = "";
          setSignUpData.password = "";
        }
      })
      .catch(function (error) {
        console.error(error);
        console.log("masuk catch");
      });
  };

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
              <FormControl.Label>Name</FormControl.Label>
              <Input
                variant="underlined"
                isRequired
                type="text"
                autoComplete="name"
                value={signUpData.name}
                placeholder=""
                keyboardType="default"
                onChangeText={(name) => {
                  setSignUpData({ ...signUpData, name: name });
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                variant="underlined"
                isRequired
                type="email"
                autoComplete="email"
                value={signUpData.email}
                keyboardType="email-address"
                onChangeText={(email) => {
                  setSignUpData({ ...signUpData, email: email });
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                variant="underlined"
                isRequired
                type="password"
                autoComplete="password"
                secureTextEntry={true}
                value={signUpData.password}
                onChangeText={(password) => {
                  setSignUpData({ ...signUpData, password: password });
                }}
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo" onPress={signUp}>
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
