import React from "react";
import { FlatList, Image, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import PagerView from "react-native-pager-view";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../stylesheet/color";
import FavouritePageItems from "../components/itemComponentFavourite";
import headerstyle from "../../stylesheet/sharable/hearder";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

const FavouriteItemsScreen = ({ navigation }) => {
  const FavouriteData = [
    {
      image: require("../../../assets/images/beefCheckers.png"),
      favouriteTitle: "Sweet & Sticky ",
      favouriteDesc: "BBQ Beef 1kg",
      favouriteNormal: "R209.00",
      favoutiteNew: "R49.00",
      click: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      favouriteTitle: "Sweet & Sticky ",
      favouriteDesc: "BBQ Beef 1kg",
      favouriteNormal: "R209.00",
      favoutiteNew: "R49.00",
      click: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      favouriteTitle: "Sweet & Sticky ",
      favouriteDesc: "BBQ Beef 1kg",
      favouriteNormal: "R209.00",
      favoutiteNew: "R49.00",
      click: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      favouriteTitle: "Sweet & Sticky ",
      favouriteDesc: "BBQ Beef 1kg",
      favouriteNormal: "R209.00",
      favoutiteNew: "R49.00",
      click: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      favouriteTitle: "Sweet & Sticky ",
      favouriteDesc: "BBQ Beef 1kg",
      favouriteNormal: "R209.00",
      favoutiteNew: "R49.00",
      click: "Add to cart",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.White,
      }}
    >
      <View style={headerstyle.container}>
        <View style={headerstyle.icon}>
          <Icon type="ionicon" name="arrow-back" size={28} onPress={()=> navigation.goBack()} />
        </View>
        <Text style={headerstyle.text}>Favourites </Text>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Grey} />

      <View style={{ width: "100%", backgroundColor: Colors.Grey, flex: 1 }}>
        <FlatList
          horizontal={false}
          data={FavouriteData}
          renderItem={({ item, index }) => {
            return (
              <FavouritePageItems
                imageFav={item.image}
                itemTitle={item.favouriteTitle}
                itemDesc={item.favouriteDesc}
                normalPrice={item.favouriteNormal}
                newPrice={item.favoutiteNew}
                press={() => navigation.navigate("cartscreen")}
                pressStore={ () => navigation.navigate("storescreen")}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default FavouriteItemsScreen;
