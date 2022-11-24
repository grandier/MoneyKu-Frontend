import react from "react";
import { Dimensions } from "react-native";
import { Box, View, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const IncomeExpense = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <LinearGradient
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#00DBDE", "#F407FE"]}
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
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.5 }}
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
