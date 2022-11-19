import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Footer from "../../components/Footer";
import styles from "./styles";
import Greeter from "../HomeScreen/components/greeter";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "react-native-vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { Radio } from "native-base";

const AddTransaction = ({ navigation }) => {
  var radio_props = [
    { label: "Expense", value: 0 },
    { label: "Income", value: 1 },
  ];
  const [category, setCategory] = React.useState(0);
  const [amount, setAmount] = React.useState(0);

  const wallets = ["Mandiri", "BCA"];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#7B61FF", "#30A8DF"]}
        style={styles.linearGradient}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          Add Transaction
        </Text>
      </LinearGradient>
      <View style={styles.formContainer}>
        <View style={styles.inputForm}>
          {/* input jumlah uang */}
          <View style={styles.searchSection}>
            <FontAwesome5
              style={styles.searchIcon}
              name="money-bill-wave"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="50000"
              onChangeText={(inputAmount) => {
                setAmount(inputAmount);
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          {/* input jumlah uang */}
          <View style={styles.searchSection}>
            <FontAwesome5
              style={styles.searchIcon}
              name="money-bill-wave"
              size={20}
              color="#000"
            />
            <SelectDropdown
              data={wallets}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          {/* input jumlah uang */}
          <View style={styles.searchSection}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(category) => {
                setCategory({ category: category });
              }}
            />
          </View>
          <TextInput placeholder="Email" />
          <TextInput secureTextEntry={true} placeholder="Password" />
          <View></View>

          <Text>Selected: {category === 0 ? "Expense" : "Income"}</Text>
        </View>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddTransaction;
