import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  LogBox,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from "react-native-paper";
import Header from "../../components/Header";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "react-native-vector-icons";

import {
  Radio,
  Input,
  NativeBaseProvider,
  Select,
  CheckIcon,
  Button,
  NumberInput,
  HStack,
  Spinner,
  Heading,
} from "native-base";
import client from "../../API/client";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const AddTransaction = ({ navigation }) => {
  const transactionDataFormat = {
    description: "",
    amount: 0,
    wallet: "",
    category: "",
    transactionType: "",
  };

  const [checked, setChecked] = useState("first");
  const [transaction, setTransaction] = useState(transactionDataFormat);
  const [wallets, setWallets] = useState([]);

  // const walletsFixed = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets
  const walletsFixed = [
    { idwallet: 1, namewallet: "ovo", balancewallet: 110000 },
    { idwallet: 4, namewallet: "gopay", balancewallet: 110000 },
    { idwallet: 6, namewallet: "undefined", balancewallet: 100000 },
    { idwallet: 7, namewallet: "undefined", balancewallet: 500000 },
    { idwallet: 8, namewallet: "Oy", balancewallet: 123456 },
  ]; // ini nanti ganti jadi API call  getWallets

  useEffect(() => {
    const getWallets = async () => {
      const walletsFromLocal = await AsyncStorage.getItem("wallet");
      setWallets(JSON.parse(walletsFromLocal));
    };
    getWallets().catch(console.error);
  }, []);

  const categories = [
    "Entertainment",
    "Food/Drink",
    "Electronics",
    "Daily Needs",
    "Fashion",
    "Shopping",
    "Bills",
    "Gifts",
    "Salary",
    "Transfer",
    "Business",
    "Investment",
    "Education",
    "Self-improvement",
    "Family",
    "Health",
    "Other",
  ];

  const postTransaction = async () => {
    client
      .post("/login", {
        email: signInData.email,
        password: signInData.password,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.error(error);
      });
  };

  if (wallets === undefined) {
    return (
      <NativeBaseProvider>
        <View
          style={{
            height: Dimensions.get("screen").height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        </View>
      </NativeBaseProvider>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <Header title="Add Transaction" />
          <View style={styles.formContainer}>
            <View style={styles.inputForm}>
              {/* input jumlah uang */}
              <View style={styles.inputSection}>
                <FontAwesome5
                  style={styles.searchIcon}
                  name="money-bill-wave"
                  size={20}
                  color="#000"
                />

                <Input
                  variant="outline"
                  placeholder="50000"
                  size="sm"
                  keyboardType="numeric"
                  w="3/4"
                  h="2/3"
                  onChangeText={(inputAmount) => {
                    setTransaction({ ...transaction, amount: inputAmount });
                  }}
                />
              </View>

              {/* input jenis wallet */}
              <View style={styles.inputSection}>
                <Ionicons
                  style={styles.searchIcon}
                  name="wallet"
                  size={25}
                  color="#000"
                />

                <Select
                  selectedValue={transaction.wallet}
                  minWidth="200"
                  accessibilityLabel="Choose Wallet"
                  placeholder="Choose Wallet"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => {
                    setTransaction({ ...transaction, wallet: itemValue });
                  }}
                  size="sm"
                  h="3/4"
                >
                  {wallets.map((wallet, id) => {
                    {
                      return (
                        <Select.Item
                          label={wallet.namewallet}
                          value={id}
                          key={id}
                        />
                      );
                    }
                  })}
                </Select>
              </View>
              {/* input jenis kategori */}
              <View style={styles.inputSection}>
                <MaterialIcons
                  style={styles.searchIcon}
                  name="category"
                  size={25}
                  color="#000"
                />

                <Select
                  selectedValue={transaction.category}
                  minWidth="200"
                  accessibilityLabel="Choose Category"
                  placeholder="Choose Category"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => {
                    setTransaction({ ...transaction, category: itemValue });
                  }}
                  size="sm"
                  h="3/4"
                >
                  {categories.map((category, id) => {
                    return <Select.Item label={category} value={id} key={id} />;
                  })}
                </Select>
              </View>

              {/* input radio */}
              <View style={styles.radioSection}>
                <RadioButton
                  color="purple"
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => {
                    setTransaction({
                      ...transaction,
                      transactionType: "Expense",
                    });
                    setChecked("first");
                  }}
                />
                <Text>Expense</Text>
              </View>
              <View style={styles.radioSection}>
                <RadioButton
                  color="purple"
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => {
                    setTransaction({
                      ...transaction,
                      transactionType: "Income",
                    });
                    setChecked("second");
                  }}
                />
                <Text>Income</Text>
              </View>

              {/* input deskripsi */}
              <View style={styles.inputSection}>
                <MaterialIcons
                  style={styles.searchIcon}
                  name="notes"
                  size={25}
                  color="#000"
                />

                <Input
                  width="3/4"
                  variant="underlined"
                  placeholder="Description"
                  onChangeText={(newText) => {
                    setTransaction({ ...transaction, description: newText });
                  }}
                />
              </View>
              <View style={styles.inputButton}>
                <Button onPress={() => console.log(transaction)}>Add</Button>
              </View>
            </View>
          </View>
          <View style={styles.blankSpace}></View>
          <Footer navigation={navigation} selected={2} />
        </NativeBaseProvider>
      </SafeAreaView>
    );
  }
};

export default AddTransaction;
