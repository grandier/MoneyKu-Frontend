import {
  View,
  Text,
  Box,
  HStack,
  VStack,
  Spacer,
  FlatList,
  NativeBaseProvider,
  Button,
  Center,
  Pressable,
} from "native-base";
import React from "react";
import styles from "../styles";
import resultData from "../resultData";
import IncomeExpense from "./IncomeExpense";
import { Dimensions } from "react-native";

const FilteredList = ({ navigation }) => {
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <NativeBaseProvider>
      <View>
        <View style={{ borderWidth: 2, minHeight: 100, marginTop: 20 }}>
          <IncomeExpense />
        </View>
        <Box style={styles.filteredList}>
          <Text fontSize="xl" mt="3" pb="3">
            Filtered Result
          </Text>

          <FlatList
            style={{}}
            data={resultData}
            scrollEnabled={true}
            ListEmptyComponent={myListEmpty}
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
                      {item.transactionType}
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
                    {item.price}
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
        <View
          style={{
            width: 200,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              height: Dimensions.get("window").height * 0.05,
              position: "relative",
            }}
            onPress={() => console.log("im pressed")}
          >
            Change Filter
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default FilteredList;
