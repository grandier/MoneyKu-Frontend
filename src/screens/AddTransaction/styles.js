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
  },
  inputForm: {
    width: Dimensions.get("window").width * 0.8,
    maxWidth: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.5,

    borderRadius: 25,
    padding: 25,
    backgroundColor: "#E4F2FB",
    position: "relative",
    // max: {Dimension.get("window").width *0.7}
  },
  searchSection: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#fff",
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
});
export default styles;
