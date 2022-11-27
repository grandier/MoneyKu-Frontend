import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: values.verticalPadding + 40,
    // backgroundColor: "colors.background",
    // marginTop: StatusBar.currentHeight,
  },

  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    height: Dimensions.get("window").height * 0.15,
    maxHeight: Dimensions.get("window").height * 0.15,
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height * 0.5,
    position: "relative",
    bottom: 0,
    marginVertical: 20,
  },
  inputForm: {
    width: Dimensions.get("window").width * 0.8,
    maxWidth: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5,
    borderRadius: 25,
    padding: 25,
    backgroundColor: "#F2F0F0",
    position: "relative",
    // max: {Dimension.get("window").width *0.7}
  },
  inputSection: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",
    borderColor: "blue",
  },
  radioSection: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "blue",
    paddingHorizontal: 85,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "black",
  },
  inputButton: {
    marginVertical: 10,
  },

  blankSpace: {
    flex: 1,
  },
});
export default styles;
