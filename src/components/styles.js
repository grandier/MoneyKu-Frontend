import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 5,
    borderColor: "white",
    alignItems: "flex-end",
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    height: Dimensions.get("window").height * 0.15,
    maxHeight: Dimensions.get("window").height * 0.15,
  },
});
export default styles;
