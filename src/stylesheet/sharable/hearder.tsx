import { StyleSheet } from "react-native";
import Colors from "../color";


const style = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "flex-start",
        flexDirection: "row",
    alignItems:'center'
  },
  icon: {
    width: "10%",
    height: 50,
      alignItems: 'center',
    top: 12
  },
  text: {
    color: Colors.Black,
    fontSize: 22,
      fontWeight: "bold",
    left: 6
  },
});

export default style;