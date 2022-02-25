import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../stylesheet/color";
import style from "../../stylesheet/components/itemComponent";

interface FavProps {
  imageFav: number;
  itemTitle: string;
  itemDesc: string;
  normalPrice: string;
  newPrice: string;
  press: any;
}

const Items = (props: FavProps) => {
  const { imageFav, itemTitle, itemDesc, normalPrice, newPrice, press } = props;
  return (
    <View
      style={{
        backgroundColor: Colors.White,
        flex: 0.2,
        marginHorizontal: 10,
        marginVertical: 6,
        justifyContent: "space-evenly",
        borderRadius: 7,
        padding: 7,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={imageFav}
          style={{
            marginHorizontal: 5,
            width: "40%",
            height: "100%",
            borderRadius: 7,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            paddingTop: 10,
            paddingLeft: 10,
            width: "58%",
          }}
        >
          <Text style={{ textAlign: "left", fontSize: 18, }}>{itemTitle} </Text>
          <Text style={{ marginTop: 3, fontSize: 16 }}>{itemDesc} </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginTop: 3,
                textDecorationLine: "line-through",
                color: Colors.GreyLight,
                fontSize: 18,
              }}
            >
              {normalPrice}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 55,
                marginTop: 3,
                fontSize: 18,
              }}
            >
              {newPrice}
            </Text>
          </View>

          <TouchableOpacity style={style.button} onPress={press}>
            <Text style={style.text}> Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Icon
        type="ionicon"
        name="heart"
        size={20}
        style={{ position: "absolute" }}
      />
      <Text
        style={{
          position: "absolute",
          backgroundColor: Colors.GreenLighter,
          color: Colors.White,
          height: 40,
          fontSize: 18,
          borderRadius: 7,
          width: 40,
          textAlign: "center",
          padding: 10,
        }}
      >
        5
      </Text>
    </View>
  );
};

export default Items;


