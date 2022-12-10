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
  Stack,
} from "native-base";
import client from "../../API/client";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Lottie from "lottie-react-native";
import successanimation from "../../../assets/json/success.json";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const AddTransaction = ({ navigation }) => {
  const dateToday = new Date();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  async function handleConfirm(date) {
    console.log("A date has been picked: ", date);
    setTransaction({
      ...transaction,
      transactionDate: date.toISOString().split("T")[0],
    });
    hideDatePicker();
  }

  const transactionDataFormat = {
    description: "",
    amount: 0,
    walletId: 0,
    transactionCategory: "",
    transactionType: "Expense",
    transactionDate: dateToday.toISOString().split("T")[0],
  };

  const [checked, setChecked] = useState("first");
  const [transaction, setTransaction] = useState(transactionDataFormat);
  const [wallets, setWallets] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getWallets() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("/getWallet", {
        params: {
          idUser: id,
        },
      })
      .then(async function (response) {
        if (response.data.length !== 0) {
          await AsyncStorage.setItem("wallet", JSON.stringify(response.data));

          setWallets(JSON.parse(await AsyncStorage.getItem("wallet")));
        } else if (response.data.length === 0) {
          console.log("yah enol waletnya");
        }
        // console.log(walletsFetchData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const getCategories = async () => {
    client
      .get("/getCategory")
      .then(function (response) {
        setCategories(response.data.queryResult);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getWallets().catch(console.error);
    getCategories();
  }, []);

  const createExpense = async () => {
    client
      .post("/createExpense", {
        amount: transaction.amount,
        transactionDate: transaction.transactionDate,
        idUser: await AsyncStorage.getItem("id"),
        category: transaction.transactionCategory,
        description: transaction.description,
        idWallet: transaction.walletId,
      })
      .then(function (response) {
        if (response.data.message == "Error") {
          navigation.navigate("FailedScreen");
        } else {
          navigation.navigate("SuccessScreen");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const createIncome = async () => {
    client
      .post("/createIncome", {
        amount: transaction.amount,
        transactionDate: transaction.transactionDate,
        idUser: await AsyncStorage.getItem("id"),
        category: transaction.transactionCategory,
        description: transaction.description,
        idWallet: transaction.walletId,
      })
      .then(function (response) {
        if (response.data.message == "Error") {
          navigation.navigate("FailedScreen");
        } else {
          navigation.navigate("SuccessScreen");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const postTransaction = async () => {
    if (transaction.transactionType === "Expense") {
      createExpense().catch(console.error);
    } else if (transaction.transactionType === "Income") {
      createIncome().catch(console.error);
    }
  };

  if (wallets === undefined || categories.length === 0) {
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
                  placeholder="Rp50,000"
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
                  selectedValue={transaction.walletId}
                  minWidth="200"
                  accessibilityLabel="Choose Wallet"
                  placeholder="Choose Wallet"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  mt={1}
                  onValueChange={async (itemValue) => {
                    setTransaction({
                      ...transaction,
                      walletId: itemValue,
                    });
                  }}
                  size="sm"
                  h="3/4"
                >
                  {wallets.map((wallet) => {
                    {
                      return (
                        <Select.Item
                          label={wallet.name}
                          value={wallet.id}
                          key={wallet.id}
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
                  selectedValue={transaction.transactionCategory}
                  minWidth="200"
                  accessibilityLabel="Choose Category"
                  placeholder="Choose Category"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => {
                    setTransaction({
                      ...transaction,
                      transactionCategory: itemValue,
                    });
                  }}
                  size="sm"
                  h="3/4"
                >
                  {categories.map((categoryObj) => {
                    return (
                      <Select.Item
                        label={categoryObj.category}
                        value={categoryObj.id}
                        key={categoryObj.id}
                      />
                    );
                  })}
                </Select>
              </View>

              {/* input date */}
              <View style={styles.inputSection}>
                <MaterialIcons
                  style={styles.searchIcon}
                  name="date-range"
                  size={25}
                  color="#000"
                />

                <Text
                  style={{
                    textAlignVertical: "center",
                    width: 100,
                    left: 10,
                  }}
                >
                  {transaction.transactionDate}
                </Text>
                <Button
                  title="Pick Start Date"
                  variant={"outline"}
                  onPress={showDatePicker}
                  style={{ width: 100 }}
                >
                  Pick Date
                </Button>
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
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View style={styles.inputButton}>
                <Button onPress={postTransaction}>Add</Button>
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
