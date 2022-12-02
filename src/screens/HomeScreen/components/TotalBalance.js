import {
  VStack,
  Box,
  Divider,
  NativeBaseProvider,
  View,
  Text,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const TotalBalance = ({ userBalance }) => {
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
