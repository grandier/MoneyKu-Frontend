import { View, Text, Pressable, Dimensions, LogBox } from "react-native";
import React from "react";
import { NativeBaseProvider, Box, HStack, Center, Icon } from "native-base";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import styles from "./styles";

// icons can be found here:
// https://oblador.github.io/react-native-vector-icons/

const Footer = ({ navigation, selected }) => {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="100%"
        alignSelf="center"
        style={styles.footer}
      >
        <HStack bg="white" alignItems="center" shadow={6} height={70}>
          {/* home icon */}
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons name={selected === 0 ? "home" : "home-outline"} />
                }
                color={selected === 0 ? "#2B47FC" : "#3A3A3A"}
                size="md"
              />
              {/* <Text color="white" fontSize="12">
                Home
              </Text> */}
            </Center>
          </Pressable>

          {/* History transaction icon */}
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              // setSelected(3);
              navigation.navigate("TransactionHistory");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name={"bank-transfer"} />}
                color={selected === 3 ? "#2B47FC" : "#3A3A3A"}
                size="xl"
              />
              {/* <Text color="white" fontSize="12">
                Account
              </Text> */}
            </Center>
          </Pressable>

          {/* add icon */}
          <Pressable
            cursor="pointer"
            // opacity={selected === 2 ? 1 : 0.5}
            opacity={1}
            py="2"
            flex={1}
            onPress={() => {
              // setSelected(2);
              navigation.navigate("AddTransaction");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<Ionicons name={"add-circle"} />}
                // color={selected === 2 ? "#2B47FC" : "#3A3A3A"}
                color={"#B52FF8"}
                size="3xl"
              />
              {/* <Text color="white" fontSize="12">
                Account
              </Text> */}
            </Center>
          </Pressable>

          {/* wallet icon */}
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              navigation.navigate("Wallet");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons
                    name={selected === 1 ? "wallet" : "wallet-outline"}
                  />
                }
                size="md"
                color={selected === 1 ? "#2B47FC" : "#3A3A3A"}
              />
              {/* <Text color="white" fontSize="12">
                Search
              </Text> */}
            </Center>
          </Pressable>

          {/* user profile */}
          <Pressable
            cursor="pointer"
            opacity={selected === 4 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              // setSelected(4);
              navigation.navigate("UserPage");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 4 ? "account" : "account-outline"}
                  />
                }
                color={selected === 4 ? "#2B47FC" : "#3A3A3A"}
                size="lg"
              />
              {/* <Text color="white" fontSize="12">
                Account
              </Text> */}
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Footer;
