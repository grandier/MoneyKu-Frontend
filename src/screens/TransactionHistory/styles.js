import { StyleSheet, StatusBar, Dimensions } from "react-native";
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

  datePickerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height * 0.3,
    marginTop: 20,
  },

  datePicker: {
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "100%",
  },

  filteredList: {
    maxHeight: Dimensions.get("window").height * 0.5,
    paddingHorizontal: 20,
    borderWidth: 2,
    marginBottom: 10,
  },

  incomeBox: {},
  SpendingBox: {},
  transactionListWrapper: {},
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    height: 100,
    height: Dimensions.get("window").height * 0.5,
    maxHeight: Dimensions.get("window").height * 0.6,
  },
});
export default styles;
