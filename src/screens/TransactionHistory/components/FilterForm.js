import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  Input,
  Stack,
  HStack,
  VStack,
  FormControl,
  Select,
  Spacer,
  CheckIcon,
  Box,
  FlatList,
} from "native-base";
import styles from "../styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dimensions } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import resultData from "../resultData";
import IncomeExpense from "./IncomeExpense";
import client from "../../../API/client";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FilterForm = ({ navigation }) => {
  const dateToday = new Date();

  const filterDataFormat = {
    startDate: dateToday.toISOString().split("T")[0],
    endDate: dateToday.toISOString().split("T")[0],
    walletId: 0,
  };

  const [filteredTransaction, setFilteredTransaction] = useState([]);

  const [walletsFetchData, setWalletsFetchData] = useState([]);

  const [filterData, setFilterData] = useState(filterDataFormat);

  const [isDatePickerStartVisible, setDatePickerStartVisibility] =
    useState(false);

  const [isDatePickerEndVisible, setDatePickerEndVisibility] = useState(false);

  const [showFilter, setShowFilter] = useState(true);

  const showDatePickerStart = () => {
    setDatePickerStartVisibility(true);
  };
  const showDatePickerEnd = () => {
    setDatePickerEndVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerStartVisibility(false);
    setDatePickerEndVisibility(false);
  };

  // fetch filtered transaction
  const getFilteredTransaction = async () => {
    const id = await AsyncStorage.getItem("id");
    client
      .get("/getExpenseByWallet", {
        params: {
          idUser: id,
          dateBefore: filterData.startDate,
          dateAfter: filterData.endDate,
          idWallet: filterData.walletId,
        },
      })
      .then(function (response) {
        setFilteredTransaction(Object.values(response.data)[0]);
        console.log(response.data);
        console.log("FILTERED TRANSACTION: ", filteredTransaction);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    async function getWallet() {
      const id = await AsyncStorage.getItem("id");

      client
        .get("/getAccountDetail", {
          params: {
            idUser: id,
          },
        })
        .then(async function (response) {
          setWalletsFetchData(response.data.wallet);
          console.log(walletsFetchData);
          // console.log(response.data.wallet);
        })
        .catch(function (error) {
          console.error(error);
          console.log("masuk catch getWallet");
        });
    }
    getWallet();
    setShowFilter(true);
  }, []);

  useEffect(() => {
    console.log(filterData);
  }, [filterData]);

  async function handleConfirmStart(date) {
    console.log("A start date has been picked: ", date);
    setFilterData({
      ...filterData,
      startDate: date.toISOString().split("T")[0],
    });
    hideDatePicker();
  }
  async function handleConfirmEnd(date) {
    console.log("A end date has been picked: ", date);
    setFilterData({ ...filterData, endDate: date.toISOString().split("T")[0] });
    hideDatePicker();
  }

  const myListEmpty = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 150,
        }}
      >
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showFilter ? (
        <View style={styles.datePickerWrapper}>
          <Text
            style={{
              marginBottom: 25,
              alignSelf: "flex-start",
              paddingHorizontal: 40,
            }}
            fontSize="xl"
            fontWeight="bold"
          >
            Set filter
          </Text>
          <View style={styles.datePicker}>
            <FormControl>
              <Stack space={2}>
                <Stack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    title="Pick Start Date"
                    variant={"outline"}
                    onPress={showDatePickerStart}
                    style={{ width: 130 }}
                  >
                    Start Date
                  </Button>
                  <Text style={{ textAlignVertical: "center" }}>
                    {filterData.startDate}
                  </Text>
                </Stack>
                <Stack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    title="Pick End Date"
                    variant={"outline"}
                    onPress={showDatePickerEnd}
                    style={{ width: 130 }}
                  >
                    End Date
                  </Button>
                  <Text style={{ textAlignVertical: "center" }}>
                    {filterData.endDate}
                  </Text>
                </Stack>
                <Stack
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    maxHeight: 90,
                  }}
                >
                  {/* input jenis wallet */}
                  <View style={styles.inputSection}>
                    <Ionicons
                      style={styles.searchIcon}
                      name="wallet"
                      size={25}
                      color="#000"
                    />
                    <View style={{ marginLeft: 100, maxHeight: 90 }}>
                      <Select
                        selectedValue={filterData.walletId}
                        minWidth="170"
                        accessibilityLabel="Choose Wallet"
                        placeholder="Choose Wallet"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="3" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => {
                          console.log("ITEM VALUE: ", itemValue);
                          setFilterData({ ...filterData, walletId: itemValue });
                          console.log("FILTER DATA: ", filterData);
                        }}
                        size="sm"
                        h="5/6"
                      >
                        {walletsFetchData.map((wallet, id) => {
                          return (
                            <Select.Item
                              label={wallet.namewallet}
                              value={wallet.idwallet}
                              key={id}
                            />
                          );
                        })}
                      </Select>
                    </View>
                  </View>
                </Stack>
                <Stack
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    maxHeight: 90,
                  }}
                >
                  <View style={{}}>
                    <Button
                      style={{ width: 200 }}
                      size="md"
                      onPress={() => {
                        // console.log(filterData);
                        setShowFilter(!showFilter);
                        getFilteredTransaction();
                      }}
                      on
                    >
                      Filter
                    </Button>
                  </View>
                </Stack>
              </Stack>
            </FormControl>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerStartVisible}
            mode="date"
            onConfirm={handleConfirmStart}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerEndVisible}
            mode="date"
            onConfirm={handleConfirmEnd}
            onCancel={hideDatePicker}
          />
        </View>
      ) : (
        <View>
          <View
            style={{
              minHeight: 100,
              marginTop: 20,
              marginVertical: 10,
            }}
          >
            <IncomeExpense walletData={walletsFetchData} />
          </View>
          <Box style={styles.filteredList}>
            <FlatList
              style={{}}
              data={filteredTransaction}
              scrollEnabled={true}
              ListEmptyComponent={myListEmpty}
              ListHeaderComponent={() => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text fontSize="xl">Filtered Result</Text>
                  <Button
                    style={{ width: 150, alignSelf: "flex-end" }}
                    onPress={() => {
                      console.log("Click");
                      setShowFilter(!showFilter);
                    }}
                  >
                    Change Filter
                  </Button>
                </View>
              )}
              renderItem={({ item }) => (
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
                        bold
                      >
                        {item.description}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.amount}
                      </Text>
                    </VStack>
                    <Spacer />
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {"expense"}
                    </Text>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.transactiondate.substring(0, 10)}
                    </Text>
                  </HStack>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
          </Box>
        </View>
      )}
    </View>
  );
};

export default FilterForm;
