import {
  VStack,
  Box,
  Divider,
  NativeBaseProvider,
  View,
  Text,
  HStack,
  Spinner,
  Heading,
} from "native-base";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../../API/client";
import { useFocusEffect } from "@react-navigation/native";

const TotalBalance = ({ userBalance, navigation }) => {
  const [recentTransaction, setRecentTranscation] = useState({
    labels: null,
    datasets: [
      {
        data: null,
      },
    ],
    legend: ["Your 5 recent transactions"],
  });

  const [blankTransactions, setBlankTransactions] = useState({
    labels: [0],
    datasets: [
      {
        data: [0],
      },
    ],
    legend: ["Your recent transactions"],
  });
  async function getRecentTransaction() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("/getRecentTransaction", {
        params: {
          idUser: id,
        },
      })
      .then(async function (response) {
        let responseData = response.data.queryResult;

        let amounts = responseData.map((obj) => obj.amount);
        let dates = responseData.map((obj) => obj.transactiondate);

        let formattedDates = dates.map((date) => {
          let splitDate = date.split("-");
          return `${splitDate[1]}-${splitDate[2].substring(0, 2)}`;
        });

        let amountKFormatted = amounts.map((x) => x / 1000);

        setRecentTranscation({
          labels: formattedDates.reverse(),
          datasets: [
            {
              data: amountKFormatted.reverse(),
            },
          ],
        });

        // console.log("recent transcations: ", recentTransaction);
        // setRecentTransactionData(response.data);
        // console.log(Object.values(recentTransactionData));
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  // useEffect(() => {
  //   getRecentTransaction();
  //   // console.log("Recent transaction: ", recentTransaction);
  // }, []);
  const unsubscribe = navigation.addListener("didFocus", () => {
    console.log("focussed");
  });

  useFocusEffect(
    React.useCallback(() => {
      getRecentTransaction();

      return () => unsubscribe();
    }, [])
  );

  if (
    recentTransaction.labels === null ||
    recentTransaction.datasets[0].data === null
  ) {
    return (
      <NativeBaseProvider>
        <View alignItems={"center"}>
          <Box
            border="1"
            shadow="9"
            borderRadius="3xl"
            position={"absolute"}
            top={-100}
            zIndex={100}
            backgroundColor={"white"}
          >
            <VStack space="4">
              <Box px="4" pt="4">
                Your total balance
              </Box>
              <Box px="4">
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#2D99FF",
                    }}
                  >
                    Rp.{" "}
                    {userBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </Text>
                  <LineChart
                    data={blankTransactions}
                    width={Dimensions.get("window").width * 0.8}
                    height={250}
                    yAxisLabel={"Rp"}
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                      backgroundColor: "#e26a00",
                      backgroundGradientFrom: "#fb8c00",
                      backgroundGradientTo: "#ffa726",
                      labelFontSize: 2,
                      decimalPlaces: 0, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) =>
                        `rgba(255, 255, 255, ${opacity})`,

                      style: {
                        borderRadius: 16,
                      },
                      propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 10,
                      borderRadius: 16,
                    }}
                  />
                </View>
              </Box>
            </VStack>
          </Box>
        </View>
      </NativeBaseProvider>
    );
  }
  return (
    <NativeBaseProvider>
      <View alignItems={"center"}>
        <Box
          border="1"
          shadow="9"
          borderRadius="3xl"
          position={"absolute"}
          top={-100}
          zIndex={100}
          backgroundColor={"white"}
        >
          <VStack space="4">
            <Box px="4" pt="4">
              Your total balance
            </Box>
            <Box px="4">
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "#2D99FF" }}
                >
                  Rp.{" "}
                  {userBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </Text>
                <LineChart
                  data={recentTransaction}
                  width={Dimensions.get("window").width * 0.8}
                  height={250}
                  yAxisLabel={"Rp"}
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    labelFontSize: 2,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,

                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "6",
                      strokeWidth: "2",
                      stroke: "#ffa726",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 10,
                    borderRadius: 16,
                  }}
                />
              </View>
            </Box>
          </VStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default TotalBalance;
