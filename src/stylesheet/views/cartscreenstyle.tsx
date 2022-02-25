import { Dimensions, StyleSheet } from "react-native";
import Colors from "../color";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const style = StyleSheet.create({
  parent: {
    backgroundColor: Colors.GreyDarker,
    height: height,
    justifyContent: "center",
  },
  scrollview: {
    backgroundColor: Colors.Grey,
  },
  mapcontainer: {
    height: 200,
    backgroundColor: Colors.Red,
  },
  detailcontainer: {
    backgroundColor: Colors.White,
    marginHorizontal: 10,
    bottom: 40,
    position: "relative",
    borderRadius: 12,
  },
  containerflex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  containerflexmain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: Colors.Black,
    borderRadius: 7,
  },
  imagecontainer: {
    width: "40%",
    height: 160,
    backgroundColor: Colors.Black,
    borderRadius: 7,
  },
  addresscontainer: {
    backgroundColor: Colors.GreenLight,
    height: 75,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  footer: {
    height: 100,
    width: width,
    backgroundColor: Colors.White,
    padding: 15,
  },
  footerchild: {
    width: "100%",
    backgroundColor: Colors.Green,
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 7,
  },
  alertcontainermain: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: 50,
    marginHorizontal:5
  },
  alertcontainer: {
    padding: 10,
    borderWidth: 2,
    width: "90%",
    borderColor: Colors.Grey,
    justifyContent: "center",
  },
  uploadcontainer: {
    padding: 5,
    borderWidth: 2,
    right: 0,
    width: "15%",
    borderColor: Colors.Grey,
    justifyContent: "center",
  },
  tooglecontainer: {
    marginHorizontal: 15,
    height: 45,
    marginVertical: 10,
    backgroundColor: Colors.GreenLight,
    borderRadius: 7,
    justifyContent: "center",
    padding: 2,
  },
  tooglebuttonscontainer: {
    flexDirection: "row",
    marginHorizontal: 80,
    justifyContent: "center",
    backgroundColor: Colors.White,
    borderRadius: 7,
    alignItems: "center",
  },
  message: {
    marginHorizontal: 15,
  },
  messagespan: {
    color: Colors.Green,
    fontWeight:"bold"
  },
  //labels

  button: {
    backgroundColor: Colors.White,
    height: 38,
  },
  buttonlabel: {
    color: Colors.Black,
    fontSize: 18,
    textAlign: "auto",
    fontStyle: "normal",
    fontWeight: "600",
  },
  qt: {
    color: Colors.Black,
    fontSize: 18,
  },
  labelstorename: {},
  caption: {
    color: Colors.GryText,
    marginLeft: 5,
  },
  title: {
    fontSize: 18,
    marginLeft: 5,
    width: "50%",
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
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
    color: Colors.White,
  },
  distance: { fontSize: 14, marginLeft: 0, color: Colors.White },
  operation: { fontSize: 14, marginLeft: 10, color: Colors.White },

  //prices

  amountdue: {
    color: Colors.White,
    fontSize: 16,
  },
  map: {
    flex: 1,
    borderRadius:17
  },
  loginalt: {
    position: "absolute",
    height: "100%",
    backgroundColor: Colors.Black,
    width: "100%",
    opacity: 0.8,
  },
  loginalt0: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  loginalt1: {
    height: "100%",
  },

//model
  
  modelContainer: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  modelContainerChild: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

});

export default style;
