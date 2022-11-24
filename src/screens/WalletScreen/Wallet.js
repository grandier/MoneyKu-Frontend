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
import React, { useState, useCallback } from "react";
import { Ionicons } from "react-native-vector-icons";
import Header from "../../components/Header";
// Rest of the import statements
import { useFonts } from "expo-font";
import IncomeExpense from "../TransactionHistory/components/IncomeExpense";

//@ts-nocheck
const Wallet = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    CenturyGothic: require("../../../assets/fonts/CenturyGothic.ttf"),
    InterLight: require("../../../assets/fonts/Inter-Light.ttf"),
    InterBold: require("../../../assets/fonts/Inter-Bold.ttf"),
    InterMedium: require("../../../assets/fonts/Inter-Medium.ttf"),
    InterSemibold: require("../../../assets/fonts/Inter-SemiBold.ttf"),
  });

  const [placement, setPlacement] = useState(undefined);
  const [openAddWallet, setOpenAddWallet] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);

  const openModal = (placement) => {
    setOpenWallet(true);
    setPlacement(placement);
  };

  const wallets = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Wallets" />
      <NativeBaseProvider>
        <View>
          <View style={{ height: "80%", marginTop: 20, paddingHorizontal: 20 }}>
            <Text py={"5"} style={{ fontFamily: "InterBold" }}>
              Select Wallet
            </Text>

            <Box>
              <FlatList
                data={wallets}
                renderItem={({ item }) => (
                  <Box
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: "muted.50",
                    }}
                    borderColor="muted.800"
                    pl={["0", "4"]}
                    pr={["0", "5"]}
                    py="4"
                  >
                    <HStack space={[2, 3]} paddingX={2}>
                      <VStack>
                        <Text
                          _dark={{
                            color: "warmGray.50",
                          }}
                          color="coolGray.800"
                          bold
                          alignSelf={"center"}
                        >
                          {item}
                        </Text>
                      </VStack>
                      <Spacer />
                      {/* View Wallet */}
                      <Pressable
                        onPress={() => {
                          // setSelected(0);
                          console.log(item, "pressed");
                          setOpenWallet(true);
                        }}
                      >
                        <Center>
                          <Icon
                            mb="1"
                            as={<AntDesign name={"rightcircle"} />}
                            color={"#2B47FC"}
                            size="md"
                          />
                        </Center>
                      </Pressable>
                    </HStack>
                  </Box>
                )}
                keyExtractor={(item) => item.id}
              />
            </Box>

            <Stack
              direction={{
                base: "column",
                md: "row",
              }}
              space={2}
            >
              <Button onPress={() => openModal("bottom")}>Add Wallet</Button>
            </Stack>
          </View>
        </View>

        <Modal
          isOpen={openAddWallet}
          onClose={() => setOpenAddWallet(false)}
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
                <Input placeholder="" />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Initial Balance (Rp)</FormControl.Label>
                <Input keyboardType="numeric" placeholder="Rp 50,000" />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setOpenAddWallet(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setOpenAddWallet(false);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Modal
          isOpen={openWallet}
          onClose={() => setOpenWallet(false)}
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
            <Modal.Header>View Wallet</Modal.Header>
            <Modal.Body>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="4"
              >
                <IncomeExpense />
              </Box>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setOpenWallet(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setOpenWallet(false);
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
