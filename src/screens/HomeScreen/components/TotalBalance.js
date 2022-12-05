import {
  VStack,
  Box,
  Divider,
  NativeBaseProvider,
  View,
  Text,
} from "native-base";
import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../../API/client";

const TotalBalance = ({ userBalance }) => {
  const [recentTransaction, setRecentTranscation] = useState({
    labels: null,
    datasets: [
      {
        data: null,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"],
  });

  const [recentTransactionData, setRecentTransactionData] = useState(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  async function getRecentTransaction() {
    const id = await AsyncStorage.getItem("id");

    client
      .get("/getRecentTransaction", {
        params: {
          idUser: id,
        },
      })
      .then(async function (response) {
        console.log(
          "response data amount",
          Object.entries(response.data)[0][1].amount
        );
        // console.log(
        //   "response data transactiondate",
        //   response.data.transactiondate
        // );
        // setRecentTranscation({
        //   ...recentTransaction,
        //   labels: response.data.amount,
        //   datasets: response.data.transactiondate.substring(0, 10),
        // });
        // setRecentTransactionData(response.data);
        // console.log(Object.values(recentTransactionData));
      })
      .catch(function (error) {
        console.error(error);
        console.log("masuk catch getWallet");
      });
  }
  useEffect(() => {
    getRecentTransaction();
    // console.log("Recent transaction: ", recentTransaction);
  }, []);
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
                  data={data}
                  width={Dimensions.get("window").width * 0.7}
                  height={220}
                  yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
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
                    marginVertical: 8,
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
