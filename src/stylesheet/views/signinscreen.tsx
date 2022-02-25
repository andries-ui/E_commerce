import { StyleSheet } from "react-native";
import Colors from "../color";


//Styles
const style = StyleSheet.create({
  parent: {
    backgroundColor: Colors.Green,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    alignSelf: "center",
    position: "relative",
    padding: 10,
  },
  container: {
    backgroundColor: Colors.Grey,
    padding: 15,
    borderRadius: 9,
    marginHorizontal: 8
  },
  signupview: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    alignContent: 'center',
    bottom: 0,
    alignSelf: 'center'
  },
  inputView: {
    marginTop: 0,
  },
  title: {
    color: Colors.Yellow,
    fontSize: 26,
    paddingBottom: 10,
  },
  caption: {
    color: Colors.White,
    fontSize: 22,
  },
  passContainer: {
    width: "100%",
    flexDirection: "row",
  },
  passwordvaidation: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  weakPassword: {
    backgroundColor: Colors.Red,
    height: 5,
    width: "30%",
    borderRadius: 3,
  },
  betterPassword: {
    backgroundColor: Colors.Yellow,
    height: 5,
    borderRadius: 3,
    width: "30%",
  },
  StronPassword: {
    backgroundColor: Colors.Green,
    height: 5,
    borderRadius: 3,
    width: "30%",
  },
  passwordStatus: {
    marginLeft: 10,
  },
});



export default style;


