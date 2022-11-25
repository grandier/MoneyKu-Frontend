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

const FilterForm = ({ navigation }) => {
  const dateToday = new Date();

  const filterDataFormat = {
    startDate: dateToday,
    endDate: dateToday,
    wallet: "",
  };
  const wallets = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets

  const walletsFetchData = [
    { id: 1, name: "Mandiri", income: "1500000", expense: "1000000" },
    { id: 2, name: "BCA", income: "3000000", expense: "2800000" },
    { id: 3, name: "OVO", income: "1000000", expense: "900000" },
    { id: 4, name: "Gopay", income: "1000000", expense: "600000" },
  ];
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

  useEffect(() => {
    setShowFilter(true);
  }, []);

  useEffect(() => {
    console.log(filterData);
    console.log("show filter = ", showFilter);
  }, [filterData]);

  async function handleConfirmStart(date) {
    console.log("A start date has been picked: ", date);
    setFilterData({ ...filterData, startDate: date });
    hideDatePicker();
  }
  async function handleConfirmEnd(date) {
    console.log("A end date has been picked: ", date);
    setFilterData({ ...filterData, endDate: date });
    hideDatePicker();
  }

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
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
                    {filterData.startDate.toISOString().split("T")[0]}
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
                    {filterData.endDate.toISOString().split("T")[0]}
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
                        selectedValue={filterData.wallet}
                        minWidth="170"
                        accessibilityLabel="Choose Wallet"
                        placeholder="Choose Wallet"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="3" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => {
                          setFilterData({ ...filterData, wallet: itemValue });
                        }}
                        size="sm"
                        h="5/6"
                      >
                        {wallets.map((wallet, id) => {
                          return (
                            <Select.Item label={wallet} value={id} key={id} />
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
                        console.log(filterData);
                        setShowFilter(!showFilter);
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
              data={resultData}
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
                        {item.productName}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.price}
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
                      {item.transactionType}
                    </Text>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.wallet}
                    </Text>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start"
                    >
                      {item.timeStamp}
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
