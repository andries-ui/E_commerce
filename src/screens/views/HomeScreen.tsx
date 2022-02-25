import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  StatusBar,
  Animated,
  TouchableHighlight,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import styleinput from "../../stylesheet/components/inputbox";
import styleButton from "../../stylesheet/components/button";
import InputBox from "../components/inputbox";
import style from "../../stylesheet/views/homeScreen";
import styleCarousel from "../../stylesheet/components/carauselItem";
import { colors, Icon } from "react-native-elements";
import Colors from "../../stylesheet/color";
import FavouriteForTheDay from "../components/favouriteForTheDay";

const HomeScreen = ({navigation}) => {
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

  const FavouriteData = {
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
  };

  const state = {
    indicator: new Animated.Value(0),
    wholeHeight: 1,
    visibleHeight: 0,
  };


  const handleVisitStore = (store:any) =>
  {

    navigation.navigate("storescreen", {
      id: store.id,
      name: store.name,
      address: store.address,
      image: store.image,
      items: store.items,
      distance: store.distance });
    
  }

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



//Permissions


  
//===========


  return (
    <View style={style.parent}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.Blue} />

      <View style={style.header.view}>
        <Text style={style.header.greatingText}>Dumela</Text>
        <Text style={style.header.userName}>Moeti</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate("profilescreen")}
        style={style.header.image}
      >
        <Image
          style={style.header.image}
          source={require("../../../assets/images/image3.png")}
        />
      </TouchableHighlight>

      <View style={style.header.view}>
        <Icon type="ionicon" size={17} name="location" color={Colors.White} />
        <Text style={style.header.address}>12 Biccard str</Text>
      </View>

      <TouchableHighlight style={style.header.search} onPress={()=> navigation.navigate('searchscreen')}>
      <TextInput
        left={<TextInput.Icon name="magnify" color={Colors.Yellow} />}
          placeholder="Search for meals near you"
          editable={false}
          style={style.header.search}
        />
      </TouchableHighlight>

      <ScrollView style={style.scrollView}>
        <View>
          <View style={styleCarousel.titleView}>
            <Text style={styleCarousel.title}>Stores near you</Text>
            <Text
              style={styleCarousel.seeAll}
              onPress={() => navigation.navigate("nearsarketscreen")}
            >
              See all
            </Text>
          </View>
          <ScrollView
            pagingEnabled
            horizontal
            alwaysBounceHorizontal
            automaticallyAdjustContentInsets
            showsVerticalScrollIndicator={false}
            onContentSizeChange={(width, height) => {
              //setState({ wholeHeight: height });
            }}
            scrollEventThrottle={16}
          >
            {storelist.map((store, index) => (
              <View style={styleCarousel.parent} key={index}>
                <Image asp style={styleCarousel.image} source={store.image} />

                <View style={styleCarousel.content}>
                  <Text
                    style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold" }}
                  >
                    {store.name}
                  </Text>
                  <View style={styleCarousel.addresView}>
                    <Icon
                      type="ionicon"
                      name="location"
                      size={16}
                      color={Colors.Yellow}
                    />
                    <Text style={{ marginLeft: 5 }}>{store.distance}</Text>

                    <Text style={{ marginLeft: 5 }}>{store.address}</Text>
                  </View>

                  <Button
                    mode="text"
                    style={styleCarousel.buttonYellow}
                    uppercase={false}
                    labelStyle={styleButton.buttom.labelWhite}
                    onPress={()=>handleVisitStore(store)}
                  >
                    {store.items}
                  </Button>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styleCarousel.titleView}>
            <Text style={styleCarousel.title}>Favourite for the day</Text>
            <Text
              style={styleCarousel.seeAll}
              onPress={() => navigation.navigate("favouriteitemsscreen")}
            >
              See all
            </Text>
          </View>

          <FavouriteForTheDay
            key={FavouriteData.key}
            image={FavouriteData.image}
            desc={FavouriteData.desc}
            title={FavouriteData.title}
            normalPrice={FavouriteData.normalPrice}
            newPrice={FavouriteData.newPrice}
            remainingItems={FavouriteData.remainingItems}
            shopName={FavouriteData.shopName}
            distance={FavouriteData.distance}
            closingTime={FavouriteData.closingTime}
            action={FavouriteData.action}
            onPress={() => handleAddToCart(FavouriteData)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
