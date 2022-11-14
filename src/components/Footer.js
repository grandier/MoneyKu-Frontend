import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { NativeBaseProvider, Box, HStack, Center, Icon } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "react-native-vector-icons";

// icons can be found here:
// https://oblador.github.io/react-native-vector-icons/

const Footer = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="100%"
        alignSelf="center"
      >
        <HStack
          bg="white"
          alignItems="center"
          safeAreaBottom
          shadow={6}
          height={70}
        >
          {/* wallet icon */}
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "wallet" : "wallet-outline"}
                  />
                }
                color={selected === 0 ? "#2B47FC" : "#3A3A3A"}
                size="lg"
              />
              {/* <Text color="white" fontSize="12">
                Home
              </Text> */}
            </Center>
          </Pressable>

          {/* notifications icon */}
          <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="notifications-none" />}
                size="lg"
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
            opacity={selected === 2 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color={selected === 2 ? "#2B47FC" : "#3A3A3A"}
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
