import React from "react";
import { FlatList, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../../stylesheet/color";
import FavouritePageItems from "../components/itemComponent"
import headerstyle from '../../stylesheet/sharable/hearder'
import { Icon } from "react-native-elements";
import StoreItem from "../components/storeItem";

const MarketScreen = ({ navigation }) => {
  const storelist = [
    {
      id: 1,
      name: "Checkers",
      address: "13 biccard, polokwane",
      image: require("../../../assets/images/checkers.jpg"),
      items: "116 items reduced today",
      distance: "5.7km",
    },
    {
      id: 1,
      name: "Shoprite",
      address: "33 market, polokwane",
      image: require("../../../assets/images/checkers.jpg"),
      items: "54 items reduced today",
      distance: "3.7km",
    },
    {
      id: 1,
      name: "Ebisons",
      address: "111 risik, polokwane",
      image: require("../../../assets/images/checkers.jpg"),
      items: "30 items reduced today",
      distance: "3km",
    },
    {
      id: 1,
      name: "Nesta",
      address: "174 marshal, polokwane",
      image: require("../../../assets/images/checkers.jpg"),
      items: "17 items reduced today",
      distance: "5km",
    },
    {
      id: 1,
      name: "Watloo",
      address: "12 market, polokwane",
      image: require("../../../assets/images/checkers.jpg"),
      items: "42 items reduced today",
      distance: "4.3km",
    },
  ];

  const handleAddToCart = (store: any) =>
  {

    navigation.navigate("storescreen", {
      id: store.id,
      name: store.name,
      address: store.address,
      image: store.image,
      items: store.items,
      distance: store.distance
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

      <View style={headerstyle.container}>
        <View style={headerstyle.icon}>
          <Icon type="ionicon" name="business" size={28} />
        </View>
        <Text style={headerstyle.text}>Market </Text>
      </View>
      <View style={{ width: "100%", backgroundColor: Colors.Grey, flex: 1 , justifyContent:'center', alignItems:'center'}}>
        <FlatList
          horizontal={false}
          data={storelist}
          renderItem={({ item, index }) => {
            return (
              <StoreItem
                key={item.key}
                image={item.image}
                remainingItems={item.items}
                shopName={item.name}
                distance={item.distance}
                address={item.address}
                onPress={() => handleAddToCart(item)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MarketScreen;