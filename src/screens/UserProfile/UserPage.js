import { View, Text, SafeAreaView } from "react-native";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Spacer,
  Stack,
  Button,
} from "native-base";

import Footer from "../../components/Footer";
import styles from "./styles";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import client from "../../API/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  async function getAccountDetail() {
    const id = await AsyncStorage.getItem("id");
    console.log(id);

    client
      .get("/getAccountDetail", {
        params: {
          idUser: id,
        },
      })
      .then(async function (response) {
        // console.log(await AsyncStorage.getItem("wallet"));
        setUsername(response.data.name);
        setEmail(response.data.email);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getAccountDetail();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <Header title="User Profile" />
        <View style={styles.container}>
          <View
            style={{
              height: "80%",
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              py={"5"}
              style={{ fontFamily: "InterBold", marginVertical: 20 }}
            >
              Account
            </Text>
            <Box>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      style={{ fontSize: 12 }}
                    >
                      User Name
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                      style={{ fontWeight: "900", fontSize: 16 }}
                    >
                      {username}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      style={{ fontSize: 12 }}
                    >
                      Email
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                      style={{ fontWeight: "900", fontSize: 16 }}
                    >
                      {email}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
              <Stack
                direction={{
                  base: "column",
                  md: "row",
                }}
                space={2}
                marginTop={"10"}
              >
                <Button
                  onPress={async function () {
                    console.log("kepencet");
                    await AsyncStorage.removeItem("id");
                    navigation.navigate("Signin");
                  }}
                  variant="outline"
                  colorScheme="danger"
                >
                  Sign Out
                </Button>
              </Stack>
            </Box>
          </View>
        </View>
        <Footer navigation={navigation} selected={4} />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default UserPage;
