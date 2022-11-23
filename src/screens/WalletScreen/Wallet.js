import { View, Text, SafeAreaView, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  Button,
  Stack,
  Modal,
  FormControl,
  Input,
} from "native-base";
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Wallets" />
      <NativeBaseProvider>
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          space={2}
        >
          <Button onPress={() => openModal("bottom")}>Bottom</Button>
        </Stack>
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
