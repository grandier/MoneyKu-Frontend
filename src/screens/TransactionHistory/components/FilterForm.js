import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  Input,
  Stack,
  FormControl,
  Select,
  CheckIcon,
} from "native-base";
import styles from "../styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dimensions } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import resultData from "../resultData";
import FilteredList from "./FilteredList";

const FilterForm = ({ navigation }) => {
  const dateToday = new Date();

  const filterDataFormat = {
    startDate: dateToday,
    endDate: dateToday,
    wallet: "",
  };
  const wallets = ["Mandiri", "BCA", "OVO", "Gopay"]; // ini nanti ganti jadi API call  getWallets

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

  return (
    <View style={styles.container}>
      {showFilter ? (
        <View style={styles.datePickerWrapper}>
          <Text>Set filter</Text>
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
        <FilteredList navigation={navigation} resultData={resultData} />
      )}
    </View>
  );
};

export default FilterForm;
