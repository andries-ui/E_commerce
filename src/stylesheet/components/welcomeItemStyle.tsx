import { Dimensions, StyleSheet } from "react-native";
import Colors from "../color";

const width = Dimensions.get("window").width;
const style = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
  },
  title: {
    width: width,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "900",
    fontStyle: "normal",
    marginTop: 10,
    color: Colors.Black,
    top: 0,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  image: {
    height: 240,
    width: 240,
    borderRadius: 294,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  caption: {
    fontFamily: "avenir",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
    textAlign: "center",
    color: Colors.Black,
    alignContent: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});

export default style;
