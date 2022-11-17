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
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },

  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 5,
    borderColor: "white",
    alignItems: "flex-end",
  },
});
export default styles;
