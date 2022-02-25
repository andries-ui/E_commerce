import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({
  headercontainer: {
    backgroundColor: Colors.Green,
    height: 130,
    flexDirection: "row",
  },
  profilecontainer: {
    marginHorizontal: 10,
    backgroundColor: Colors.White,
    borderRadius: 9,
    width: "80%",
    height: 100,
    padding: 5,
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    top: 80,
  },
  container: {
    top: 70,
    justifyContent: "space-evenly",
  },
  itemcontainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 30,
  },
  item: {
    width: 110,
    height: 100,
    backgroundColor: Colors.White,
    borderRadius: 7,
    justifyContent: "flex-start",
    padding: 5,
  },
  icon: {
    width: 35,
    height: 35,
    backgroundColor: Colors.White,
    borderRadius: 5,
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    top: 5,
  },
  label: {
    fontWeight: "600",
    fontSize: 20,
    top: 25,
  },
  labelmy: {
    fontWeight: "bold",
    fontSize: 26,
    top: 20,
    left: 15,
    color: Colors.White,
  },
  labelaccount: {
    fontWeight: "bold",
    fontSize: 26,
    top: 20,
    color: Colors.Yellow,
    left: 20,
  },
  image: {
    color: Colors.Yellow,
    fontSize: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  informationview: {
    padding: 15,
  },
  labelusername: {
    color: Colors.Black,
    fontSize: 18,
    fontWeight: "700",
  },
  labelcontact: { color: Colors.GreyLight, fontSize: 16, fontWeight: "700" },
});

export default style;