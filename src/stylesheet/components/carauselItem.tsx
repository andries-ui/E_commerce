import { Dimensions } from "react-native";
import Colors from "../color"


const width = Dimensions.get("window").width;

const style = {
  parent: {
    borderRadius: 12,
    width: width - 33,
    backgroundColor: Colors.White,
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent:'center'
  },
  image: {
    borderRadius: 12,
    height: 140,
    width: "100%",
    justifyContent: "center",
  },
  content: {
    backgroundColor: Colors.White,
    height: 105,
    width: "100%",
    padding: 10,
    borderRadius: 12,
  },
  addresView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  buttonYellow: {
    backgroundColor: Colors.Yellow,
    height: 40,
    width: "100%",
    borderRadius: 7,
    marginTop:5
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    color: Colors.White,
    alignItem: "right",
    fontSize: 18,
  },
};

export default style