import react from "react";
import { Dimensions } from "react-native";
import { Box, View, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const IncomeExpense = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <LinearGradient
        colors={["#FF8787", "#C16A6A"]}
        style={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
          marginHorizontal: 30,
          padding: 20,
          borderRadius: 20,
          height: 100,
          width: 150,
        }}
      >
        <Text style={{ fontSize: 15, color: "#A73131" }}>Spending</Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#A73131" }}>
          Rp 1500000
        </Text>
      </LinearGradient>
      <LinearGradient
        colors={["#7AF69D", "#7AF6AC"]}
        style={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
          marginHorizontal: 30,
          padding: 20,
          borderRadius: 20,
          height: 100,
          width: 150,
        }}
      >
        <Text style={{ fontSize: 15, color: "#246923" }}>Income</Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#246923" }}>
          Rp 3000000
        </Text>
      </LinearGradient>
    </View>
  );
};

export default IncomeExpense;
