import React from "react";
import { Dimensions } from "react-native";
import Colors from "../color";


const width = Dimensions.get('window').width;

const style = {
  parent: {
    backgroundColor: Colors.DarkBlue,
    height: "92%",
    padding: "3%",
  },

  header: {
    view: {
      width: "100%",
      flexDirection: "row",
    },
    greatingText: {
      color: Colors.White,
      fontSize: 26,
    },
    userName: {
      color: Colors.Yellow,
      fontSize: 26,
      marginLeft: 10,
    },
    image: {
      color: Colors.Yellow,
      fontSize: 20,
      height: 35,
      width: 35,
      borderRadius: 20,
      position: "absolute",
      right: "4%",
      top: 15,
    },
    address: {
      color: Colors.White,
      fontSize: 16,
      marginLeft: 3,
    },
    addressIcon: {
      color: Colors.White,
      fontSize: 16,
      marginLeft: 10,
    },
    search: {
      width: "100%",
      backgroundColor: Colors.White,
      height: 35,
      marginTop: 10,
      borderRadius: 5,
      alignItems: "flex-start",
      },
  },

  navigation: {
    backgroundColor: Colors.Blue,
  },
    scrollView:{
      marginTop:12,
  }
};

export default style