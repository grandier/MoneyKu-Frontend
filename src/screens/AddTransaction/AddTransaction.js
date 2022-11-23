import { Text, SafeAreaView, StyleSheet, View, TextInput } from "react-native";
import React from "react";
import Footer from "../../components/Footer";
import styles from "./styles";

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
} from "native-base";

const AddTransaction = ({ navigation }) => {
  const transactionDataFormat = {
    description: "",
    amount: 0,
    wallet: "",
    category: "",
    transactionType: "",
  };

  const [transaction, setTransaction] = React.useState(transactionDataFormat);

  // for radio buttons
  const [checked, setChecked] = React.useState("first");

  const wallets = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets
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
                  return <Select.Item label={wallet} value={id} key={id} />;
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
                  setTransaction({ ...transaction, transactionType: "Income" });
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
};

export default AddTransaction;
