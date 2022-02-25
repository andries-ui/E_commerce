
import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({
  Container: {
    borderRadius: 12,
    width: "98%",
    backgroundColor: Colors.White,
    marginLeft: 5,
    marginRight: 5,
    padding: 7,
  },
  flexContainer: {
    borderRadius: 12,
    padding: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: "50%",
  },
  caption: {
    color: Colors.GryText,
   marginLeft: 5
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
  },
  normalprice: {
    color: Colors.GryText,
    textDecorationLine: "line-through",
    fontSize: 16,
    marginLeft: 5,
  },
  recentprice: { fontSize: 16, marginLeft: 10 },
  remainingItems: {
    fontSize: 16,
    padding: 10,
    marginLeft: 5,
    width: 40,
    backgroundColor: Colors.Red,
    color: Colors.White,
    borderRadius: 7,
    textAlign: "center",
  },
  remainingitemtext: { fontSize: 18, marginLeft: 5 },
  shoptitle: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "900",
    marginLeft: 5,
    marginTop: 5,
  },
  distance: { fontSize: 14, marginLeft: 0 },
  operation: { fontSize: 14, marginLeft: 10 },
  button: {
    fontSize: 8,
    backgroundColor: Colors.Green,
    borderRadius: 9,
    marginTop: 5,
  },
});
export default style;