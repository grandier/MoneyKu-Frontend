import react, { useEffect } from "react";
import { Box, View, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const IncomeExpense = ({ walletData }) => {
  useEffect(() => {
    console.log(walletData);
  }, []);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <LinearGradient
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#B52FF8", "#F407FE"]}
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
        <Text style={{ fontSize: 15, color: "#fff", fontWeight: "900" }}>
          Spending
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          Rp {walletData[0].expense}
        </Text>
      </LinearGradient>
      <LinearGradient
        start={{ x: 0, y: 0.2 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#5970FF", "#40CEF2"]}
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
        <Text style={{ fontSize: 15, color: "#fff", fontWeight: "900" }}>
          Income
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>
          Rp {walletData[0].balancewallet}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default IncomeExpense;
