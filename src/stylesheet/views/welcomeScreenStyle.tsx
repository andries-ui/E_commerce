import { Dimensions } from "react-native";
import Colors from "../color";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const style = {
  parent: {
    container: {
      height: "100%",
      width: width,
      flex: 1,
    },
  },
  topContainer: {
    container: {
      width: width,
      height: "1%",
      flexDirection: "row",
      paddingLeft: "2%",
      paddingRight: "2%",
      top: "2%",
    },
  },
  middleContainer: {
    container: {
      height: "70%",
      bottom: 0,
      marginTop: 5,
      justifyContent: "center",
    },
  },
  bottomContainer: {
    container: {
      width: width,
      position: "absolute", //Here is the trick
      bottom: "5%",
      paddingRight: "10%",
      paddingLeft: "10%",
      justifyContent: "space-between",
    },
    label: {
      fontSize: 16,
      color: Colors.Black,
    },
    labelYelow: {
      fontSize: 16,
      color: Colors.White,
    },
    buttonContained: {
      marginTop: 7,
      backgroundColor: Colors.Yellow, //Here is the trick
    },
    buttonContainedGrey: {
      marginTop: 7,
      backgroundColor: Colors.GreyLight, //Here is the trick
    },
    buttonOutlined: {
      marginTop: 7,
    },
  },
};

export default style;
