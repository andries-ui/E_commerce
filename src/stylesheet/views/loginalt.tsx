import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({
  parent: {
    backgroundColor: Colors.Black,
    opacity: 0.7,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  container: {
    backgroundColor: Colors.Transparent,
    padding: "10%",
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    backgroundColor: Colors.Yellow,
    borderRadius: 9,
    marginTop: 10,
    width: "100%",
  },
  button2: {
    backgroundColor: Colors.Grey,
    borderRadius: 9,
    marginTop: 10,
    width: "100%",
  },
  button3: {
    marginTop: 10,
    width: "100%",
  },

  // labels

  label: {
    color: Colors.White,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  labelbutton1: {
    color: Colors.White,
  },
  labelbutton2: {
    color: Colors.Black,
  },
  labelbutton3: {
    color: Colors.White,
    },
  
});

export default style