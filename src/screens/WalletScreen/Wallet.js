import { View, SafeAreaView, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  Button,
  Stack,
  Modal,
  FormControl,
  Input,
  FlatList,
  HStack,
  VStack,
  Spacer,
  Text,
  Box,
  Pressable,
  Icon,
  Center,
} from "native-base";
import { AntDesign } from "react-native-vector-icons";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import Header from "../../components/Header";

//@ts-nocheck
const Wallet = ({ navigation }) => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  const wallets = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Wallets" />
      <NativeBaseProvider>
        <View>
          <View style={{ height: "80%", marginTop: 20, paddingHorizontal: 20 }}>
            <Text bold py={"5"}>
              Select Wallet
            </Text>
            <FlatList
              data={["Mandiri", "BCA", "OVO", "Gopay"]}
              style={{}}
              renderItem={({ item }) => (
                <Box
                  pl={["0", "4"]}
                  pr={["0", "5"]}
                  py="4"
                  style={{
                    borderColor: "white",
                    paddingHorizontal: 20,
                    backgroundColor: "#F2F0F0",
                    borderBottomWidth: 1,
                  }}
                >
                  <HStack space={3} justifyContent="space-between" marginX={5}>
                    <VStack>
                      <Text
                        _dark={{
                          color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                      >
                        {item}
                      </Text>
                    </VStack>
                    {/* home icon */}
                    <Pressable
                      py="3"
                      flex={1}
                      onPress={() => {
                        // setSelected(0);
                        console.log("icon pressed");
                      }}
                    >
                      <Center>
                        <Icon
                          mb="1"
                          as={<AntDesign name="right" />}
                          size="md"
                        />
                        {/* <Text color="white" fontSize="12">
                Home
              </Text> */}
                      </Center>
                    </Pressable>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
            >
              <Button onPress={() => openModal("bottom")}>Bottom</Button>
            </Stack>
          </View>
        </View>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          safeAreaTop={true}
          style={{ minWidth: Dimensions.get("screen").width }}
          borderRadius={36}
          size="full"
        >
          <Modal.Content
            width={Dimensions.get("screen").width}
            minHeight={Dimensions.get("screen").height - 200}
            {...styles[placement]}
          >
            <Modal.CloseButton />
            <Modal.Header>Add Wallet</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Email</FormControl.Label>
                <Input />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setOpen(false);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Footer navigation={navigation} selected={1} />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};
export default Wallet;
const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto",
  },
  left: {
    marginLeft: 0,
    marginRight: "auto",
  },
  right: {
    marginLeft: "auto",
    marginRight: 0,
  },
  center: {},
};
