import { StyleSheet, StatusBar } from "react-native";
import values from "../../constants/values";
import colors from "../../constants/colors";
// import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: values.verticalPadding + 40,
    backgroundColor: colors.background,
    marginTop: StatusBar.currentHeight,
  },
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },
  parent: {
    height: "80%",
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: "#7B61FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
