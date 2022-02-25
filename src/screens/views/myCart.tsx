import React, { Component, useEffect, useRef, useState } from "react";
import
  {
    Text,
    Image,
    ScrollView,
    View,
    StatusBar,
    Animated,
    TouchableHighlight,
    Platform,
    PermissionsAndroid,
    StyleSheet,
  } from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import styleinput from "../../stylesheet/components/inputbox";
import styleButton from "../../stylesheet/components/button";
import InputBox from "../components/inputbox";
import style from "../../stylesheet/views/cartscreenstyle";
import styleCarousel from "../../stylesheet/components/carauselItem";
import { colors, Icon } from "react-native-elements";
import Colors from "../../stylesheet/color";
import FavouriteForTheDay from "../components/favouriteForTheDay";
import LoginAlt from "./loginalt";
import altstyle from "../../stylesheet/views/loginalt"
import { useRoute } from "@react-navigation/native";
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import Modal from "react-native-modalbox";

const CartScreen = ({ navigation }) =>
{


  const route = useRoute();

  const [modalVisible, setModalVisible] = useState(true);
  const [quantity, setquantity] = useState<number>(1);
  const [amountdue, setamountdue] = useState<string>(route.params.newPrice);
  

  const handleDecrement = () =>
  {
    if (quantity < 1)
    {
      setquantity(quantity)
      const amount = parseFloat(amountdue.toString().substring(1)) - parseFloat(route.params.newPrice.toString().substring(1));
      setamountdue('R' + amount.toString())
    }
    else
    {
      setquantity(quantity - 1);
      setamountdue(route.params.newPrice);
    }
  };
  const handleIncreament = () =>
  {
    setquantity(quantity + 1);
    const amount = parseFloat(route.params.newPrice.toString().substring(1)) * quantity;
    setamountdue('R' + amount.toString())
  };


  //map configurations ======================================



  //=========================================================

  const [userToken, setuserToken] = useState('null');
  const [hasUserToken, sethasUserToken] = useState(true);
  const [proceeded, setproceeded] = useState(false);

  const handleVerifyAuth = () =>
  {
    userToken ? sethasUserToken(false) : sethasUserToken(true);
  }

  const handleBrowse = () =>
  {
    sethasUserToken(true);
    setproceeded(false);
  }

  const handleSignin = () =>
  {
    setproceeded(true);
    sethasUserToken(true);
    navigation.navigate("signinscreen", { screen: "acceptedorderscreen" });
  };
  const handleSignup = () =>
  {
    setproceeded(true);
    sethasUserToken(true);
    navigation.navigate("signupscreen", { screen: "paymentscreen" });
  };



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


  //bottomsheet

  const getModal = () =>
  {
    return (
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalVisible}
        style={styles.modalBox}
        onClosed={() => setModalVisible(false)}
      >
        <View style={styles.content}>
          <Text style={styles.textStyle}>AndroidVille</Text>
        </View>
      </Modal>
    );
  };

  //===========

  return (
    <View style={style.parent}>

      <ScrollView style={style.scrollview} showsVerticalScrollIndicator={false}>
        <View style={style.mapcontainer} >

          <MapView
            provider={PROVIDER_DEFAULT} // remove if not using Google Maps
            style={style.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>

        <View style={style.detailcontainer}>
          <View style={style.addresscontainer}>
            <Text style={style.shoptitle}>{route.params.shopName}</Text>
            <View style={style.containerflex}>
              <Icon
                type="ionicon"
                name="location"
                size={18}
                color={Colors.White}
              />
              <Text style={style.distance}>{route.params.distance}</Text>
              <Text style={style.operation}>{route.params.closingTime}</Text>
            </View>
          </View>

          <View style={style.containerflexmain}>
            <View style={style.imagecontainer}>
              <Image
                style={style.image}
                source={route.params.image}
              />
            </View>

            <View>
              <Text style={style.caption}>{route.params.desc}</Text>
              <Text style={style.title}>
                {route.params.title}
              </Text>

              <View style={style.containerflex}>
                <Text style={style.normalprice}>{route.params.normalPrice}</Text>
                <Text style={style.recentprice}>{route.params.newPrice}</Text>
              </View>

              <View style={style.containerflex}>
                <Text style={style.remainingItems}>{route.params.remainingItems}</Text>
                <Text style={style.remainingitemtext}>Items left</Text>
              </View>
            </View>
          </View>
          <View style={style.alertcontainermain}>
            <View style={style.alertcontainer}>
              <Text>Expires: Tomorrow | Always check labels</Text>
            </View>
            <View style={style.uploadcontainer}>
              <Icon type="ionicon" name="cloud-upload" />
            </View>
          </View>

          <View style={style.tooglecontainer}>
            <View style={style.tooglebuttonscontainer}>
              <Button
                onPress={handleDecrement}
                style={style.button}
                labelStyle={style.buttonlabel}
              >
                -
              </Button>
              <Text style={style.qt}>{quantity}</Text>
              <Button
                onPress={handleIncreament}
                style={style.button}
                labelStyle={style.buttonlabel}
              >
                +
              </Button>
            </View>
          </View>

          <Text style={style.message}>
            Our quarter 2 clock senses that this item could be sold out in the
            next <Text style={style.messagespan} >15-20 minutes</Text>. wecould be wrong but doubt it
          </Text>
        </View>
      </ScrollView>

      <View style={style.footer}>
        <View style={style.footerchild} style={style.footerchild}>
          <Text style={style.amountdue}>  <Text style={style.amountdue}>R </Text>{amountdue}</Text>
          <Button
            labelStyle={style.amountdue}
            mode="text"
            onPress={handleVerifyAuth}
          >
            Checkout
          </Button>
        </View>
      </View>

      {hasUserToken ?
        null
        :
        <View style={style.loginalt}>
          <View style={altstyle.parent}></View>
          <View style={altstyle.container}>
            <Text style={altstyle.label}>
              You need to sign Up or Sign in before you are able to check out
            </Text>
            <Button
              onPress={handleSignup}
              style={altstyle.button1}
              labelStyle={altstyle.labelbutton1}
            >
              Sign Up
            </Button>
            <Button
              onPress={handleSignin}
              style={altstyle.button2}
              labelStyle={altstyle.labelbutton2}
            >
              Sign in
            </Button>
            <Button
              labelStyle={altstyle.labelbutton1}
              style={altstyle.button3}
              mode="text"
              onPress={handleBrowse}
            >
              Continue browsing the App
            </Button>
          </View>
        </View>
      }

      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalVisible}
        style={styles.modalBox}
        onClosed={() => setModalVisible(false)}
      >
        <View style={styles.content}>
          <View style={style.modelContainerChild}>
            <Text style={styles.textStyle}>Checkout</Text>
            <Icon type="ionicon" name="close" onPress={()=>{ setModalVisible(false)}} />
          </View>
         
          <Divider style={{marginTop:20}} />
          <View style={style.modelContainer}>
            <Text>Delivery</Text>
            <TouchableHighlight onPress={()=> navigation.navigate('cardscreen')}>
            <View style={style.modelContainerChild} >
              <Text>Select method</Text>
              <Icon type="ionicon" name="chevron-forward-outline" />
              </View>
            </TouchableHighlight>
          </View>

          <Divider />
          <View style={style.modelContainer}>
            <Text>Payment</Text>
            <TouchableHighlight>
            <View style={style.modelContainerChild}>
                <Image style={{height:16, width:21}} source={require('../../../assets/images/creditcard.png')}/>
              <Icon type="ionicon" name="chevron-forward-outline" />
              </View>
            </TouchableHighlight>
          </View>

          <Divider />
          <View style={style.modelContainer}>
            <Text>Promo Code</Text>
            <TouchableHighlight>
            <View style={style.modelContainerChild}>
              <Text>Pick discount</Text>
              <Icon type="ionicon" name="chevron-forward-outline" />
              </View>
            </TouchableHighlight>
          </View>

          <Divider />
          <View style={style.modelContainer}>
            <Text>Total Cost</Text>
            <TouchableHighlight>
            <View style={style.modelContainerChild}>
              <Text>R <Text>1234 </Text> </Text>
              <Icon type="ionicon" name="chevron-forward-outline" />
              </View>
            </TouchableHighlight>
          </View>

          <Divider />
         
          <Text style={{ marginTop: 0 }}>Delivery</Text>

          <Text> <Text>Terms</Text> and <Text>Conditions</Text></Text>
          <View style={style.modelContainerChild}>
            <Text>Home</Text>
            <Text>Profile</Text>
          </View>

          <Button style={{ marginTop: 0 }} onPress={() => navigation.navigate("acceptedorderscreen")}>Place Order</Button>

        </View>
      </Modal>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center", width: '100%',
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    width: '100%',
    backgroundColor: "transparent"
  },
  content: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "white",
    width: '98%',
    paddingHorizontal: 7,
    paddingBottom: 30,
    paddingTop: 10
  },
  textStyle: {
    fontSize: 22
  }
});



export default CartScreen;
