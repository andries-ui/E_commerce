import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: Colors.Green,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width:'100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    color: Colors.White,
  },
});


export default style;