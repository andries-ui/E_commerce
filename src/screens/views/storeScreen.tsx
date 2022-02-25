import React from "react";
import { FlatList, Image, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import PagerView from "react-native-pager-view";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../stylesheet/color";
import FavouritePageItems from "../components/itemComponent";
import { Icon } from "react-native-elements";
import { useRoute } from "@react-navigation/native";

const StoreScreen = ({ navigation }) =>
{

  const route = useRoute();

  const itemlist = [
    {
      image: require("../../../assets/images/beefCheckers.png"),
      key: 1,
      desc: "Ready Meals and Desserts",
      title: "Sweet & Sticky BBQ Beef 1kg",
      normalPrice: "R209.00",
      newPrice: "R49.00",
      remainingItems: "5",
      shopName: "Zama Zama Spaza Shop",
      distance: "5.7km",
      closingTime: "Open 8am & Closes 7pm",
      action: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      key: 1,
      desc: "Ready Meals and Desserts",
      title: "Sweet & Sticky BBQ Beef 1kg",
      normalPrice: "R209.00",
      newPrice: "R49.00",
      remainingItems: "5",
      shopName: "Zama Zama Spaza Shop",
      distance: "5.7km",
      closingTime: "Open 8am & Closes 7pm",
      action: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      key: 1,
      desc: "Ready Meals and Desserts",
      title: "Sweet & Sticky BBQ Beef 1kg",
      normalPrice: "R209.00",
      newPrice: "R49.00",
      remainingItems: "5",
      shopName: "Zama Zama Spaza Shop",
      distance: "5.7km",
      closingTime: "Open 8am & Closes 7pm",
      action: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      key: 1,
      desc: "Ready Meals and Desserts",
      title: "Sweet & Sticky BBQ Beef 1kg",
      normalPrice: "R209.00",
      newPrice: "R49.00",
      remainingItems: "5",
      shopName: "Zama Zama Spaza Shop",
      distance: "5.7km",
      closingTime: "Open 8am & Closes 7pm",
      action: "Add to cart",
    },
    {
      image: require("../../../assets/images/beefCheckers.png"),
      key: 1,
      desc: "Ready Meals and Desserts",
      title: "Sweet & Sticky BBQ Beef 1kg",
      normalPrice: "R209.00",
      newPrice: "R49.00",
      remainingItems: "5",
      shopName: "Zama Zama Spaza Shop",
      distance: "5.7km",
      closingTime: "Open 8am & Closes 7pm",
      action: "Add to cart",
    },
  ];

  const handleAddToCart = (item: any) =>
  {

    navigation.navigate("cartscreen", {
      image: item.image,
      key: item.key,
      desc: item.desc,
      title: item.title,
      normalPrice: item.normalPrice,
      newPrice: item.newPrice,
      remainingItems: item.remainingItems,
      shopName: item.shopName,
      distance: item.distance,
      closingTime: item.closingTime,
      action: item.action,
    });

  }

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
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Grey} />

      <View style={{ width: "100%" }}>
        <Image
          source={route.params.image}
          style={{ width: "100%", height: 150 }}
        />
        <View
          style={{
            left: 5,
            position: "absolute",
          }}
        >
          <View style={{marginTop:4,borderRadius:16, backgroundColor:Colors.GreyLight}}>
            <Icon
              onPress={() => navigation.goBack()}
              type="ionicon"
              name="arrow-back"
              size={26}
              />
          </View>
        </View>
        <Text style={{ textAlign: "left", fontSize: 18, fontWeight: "bold" }}>
          {route.params.name}
        </Text>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <FontAwesome5 name="map-marker-alt" size={13} color={Colors.Yellow} />
          <Text style={{ paddingLeft: 5, marginTop: -2 }}> {route.params.distance}</Text>
          <Text style={{ paddingLeft: 15, marginTop: -2 }}>
            {route.params.address}
          </Text>
        </View>
      </View>

      <View style={{ width: "100%", backgroundColor: Colors.Grey, flex: 1 }}>
        <FlatList
          horizontal={false}
          data={itemlist}
          renderItem={({ item, index }) =>
          {
            return (
              <FavouritePageItems
                imageFav={item.image}
                itemTitle={item.title}
                itemDesc={item.desc}
                normalPrice={item.normalPrice}
                newPrice={item.newPrice}
                press={() => handleAddToCart(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default StoreScreen;
