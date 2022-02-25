import { Dimensions } from "react-native";
import Colors from "../color";

const width = Dimensions.get("window").width;

const style = {
  parent: {
    borderRadius: 12,
    width: width - 20,
    backgroundColor: Colors.White,
    marginLeft: 5,
    marginRight: 5,
    alignItem: "center",
  },
  image: {
    borderRadius: 12,
    height: 140,
    width: "100%",
    justifyContent: "center",
  },
  content: {
    backgroundColor: Colors.White,
    height: 100,
    width: "100%",
    padding: 10,
    borderRadius: 12,
  },
  addresView: {
    flexDirection: "row",
    width: "100%",
  },
  buttonYellow: {
    backgroundColor: Colors.Yellow,
    height: 40,
    width: "100%",
    borderRadius: 7,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: Colors.White,
    alignItem: "right",
    fontSize: 18,
  },
};

export default style;
