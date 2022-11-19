import { StyleSheet, StatusBar } from "react-native";
import values from "../../constants/values";
import colors from "../../constants/colors";
// import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: values.verticalPadding + 40,
    backgroundColor: colors.background,
    // marginTop: StatusBar.currentHeight,
  },
});
export default styles;
