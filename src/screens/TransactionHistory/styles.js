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
    height: 200,
  },

  filteredList: {
    paddingHorizontal: 20,
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
});
export default styles;
