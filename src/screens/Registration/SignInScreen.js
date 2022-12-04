import { Text } from "react-native";
import React, { useState } from "react";
import WavyHeader from "../../components/WavyHeader";
import { StyleSheet, Dimensions } from "react-native";
import client from "../../API/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const SignInScreen = ({ navigation }) => {
  const [signInData, setSignInData] = useState({
    email: "test",
    password: "test",
  });

  const signIn = async () => {
    client
      .post("/login", {
        email: signInData.email,
        password: signInData.password,
      })
      .then(async function (response) {
        console.log(response.status);
        console.log(response.data.message);
        console.log(response.data);
        // if (response.data) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        // console.log(JSON.stringify(response.data));
        if (response.data.message === "Login successful") {
          await AsyncStorage.setItem(
            "id",
            JSON.stringify(response.data.idUser)
          );
          // await AsyncStorage.setItem("wallet", JSON.stringify(response.data.wallet));
          console.log(await AsyncStorage.getItem("wallet"));
          navigation.navigate("Home");
          console.log("masuk");
        } else {
          alert("Username/password doesn't match");
          setSignInData.email = "";
          setSignInData.password = "";
        }
      })
      .catch(function (error) {
        console.error(error);
        console.log("masuk catch login");
      });
  };

  return (
    <NativeBaseProvider>
      <WavyHeader customStyles={styles.svgCurve} />

      <Center w="100%" mt="32">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Sign In
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                isRequired
                variant="underlined"
                type="email"
                autoComplete="email"
                value={signInData.email}
                keyboardType="email-address"
                onChangeText={(email) => {
                  setSignInData({ ...signInData, email: email });
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                isRequired
                variant="underlined"
                type="password"
                autoComplete="password"
                secureTextEntry={true}
                value={signInData.password}
                onChangeText={(password) => {
                  setSignInData({ ...signInData, password: password });
                }}
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo" rounded={100} onPress={signIn}>
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("Signup")}
                // href=""
              >
                Sign Up
              </Link>
            </HStack>
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
export default SignInScreen;
