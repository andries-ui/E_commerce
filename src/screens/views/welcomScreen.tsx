import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import WelcomePagerItem from "../components/welcomPageItem";
import Colors from "../../stylesheet/color";
import style from "../../stylesheet/views/welcomeScreenStyle";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
//import {requestForegroundPermissionsAsync} from 'expo-location'

const WelcomeScreen = ({ navigation }) => {
  const [key, setKey] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [err, seterr] = useState(null)
  const slider = [
    {
      key: 1,
      title: "",
      caption:
        "Order from all your local restaurants, spaza shops with easy on-demand delivery",
      image: "../../../assets/images/logo.png",
      background: "",
      desc: "",
    },
    {
      key: 2,
      title: "It’s always a surprise, at a great price for your pocket 😀",
      caption: "We will regularly offer free delivery for new customers",
      image: "../../../assets/images/logo.png",
      background: "",
      desc: "",
    },

    {
      key: 3,
      title: "Pick it up or send imoto ",
      caption: "Satisfy your food craving at Quarter to food O’clock 😀",
      image: "../../../assets/images/logo.png",
      background: "",
      desc: "",
    },
    {
      key: 4,
      title: "",
      caption: "Struggling to place your order? let us help you step by step",
      image: "../../../assets/images/logo.png",
      background: "",
      desc: "",
    },
  ];

  // useEffect(() =>
  // {
  //   let i: any = 1;
  //   while (i > 0) {
  //      setTimeout(() => {
  //        //setCurrentPage(i)
  //      }, 300);

  //     i = i + 1;
  //   }
  // },[])

  // const startWatching = async () =>
  // {
  //   try
  //   {
  //     await requestForegroundPermissionsAsync();
  //   } catch (err)
  //   {
  //     seterr(err)
  //   }
  // }

  // useEffect(() => {
    
  //    startWatching()
    
  // }, [])


  return (
    <SafeAreaView style={style.parent.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Grey} />

      <View style={style.topContainer.container}>
        <View
          style={{ flexGrow: 1, backgroundColor: Colors.Green, height: 2 }}
        />
        <View
          style={{
            flexGrow: 1,
            backgroundColor: currentPage >= 1 ? Colors.Green : Colors.GreyLight,
            height: 2,
            marginLeft: 8,
          }}
        />
        <View
          style={{
            flexGrow: 1,
            backgroundColor: currentPage >= 2 ? Colors.Green : Colors.GreyLight,
            height: 2,
            marginLeft: 8,
          }}
        />
        <View
          style={{
            flexGrow: 1,
            backgroundColor:
              currentPage === 3 ? Colors.Green : Colors.GreyLight,
            height: 2,
            marginLeft: 8,
          }}
        />
      </View>

      <View style={style.middleContainer.container}>
        <PagerView
          initialPage={0}
          scrollEnabled
          style={{ flex: 1 }}
          showPageIndicator={true}
          onPageSelected={(e: PagerViewOnPageSelectedEvent) => {
            setCurrentPage(e.nativeEvent.position);
          }}
        >
          <View key="1" style={{ justifyContent: "center" }}>
            <WelcomePagerItem
              image={require("../../../assets/images/image1.png")}
              caption={
                "Order from all your local restaurants, spaza shops with easy on-demand delivery"
              }
            />
          </View>
          <View key="2" style={{ justifyContent: "center" }}>
            <WelcomePagerItem
              title={
                "It’s always a surprise, at a great price for your pocket 😀"
              }
              image={require("../../../assets/images/image2.png")}
              caption={
                "We will regularly offer free delivery for new customers"
              }
            />
          </View>
          <View key="3" style={{ justifyContent: "center" }}>
            <WelcomePagerItem
              title={"Pick it up or send imoto"}
              image={require("../../../assets/images/image3.png")}
              caption={
                "Satisfy your food craving at Quarter to food O’clock 😀"
              }
            />
          </View>
          <View key="4" style={{ justifyContent: "center" }}>
            <WelcomePagerItem
              title={"Quarter 2"}
              image={require("../../../assets/images/image4.png")}
              caption={
                "Struggling to place your order? let us help you step by step"
              }
            />
          </View>
        </PagerView>
      </View>

      <View style={style.bottomContainer.container}>
        <Button
          mode="contained"
          style={style.bottomContainer.buttonContained}
          onPress={() =>
            navigation.navigate("signupscreen", { screen: "dashboard" })
          }
          uppercase={false}
          labelStyle={style.bottomContainer.labelYelow}
        >
          Sign Up
        </Button>
        <Button
          mode="contained"
          style={style.bottomContainer.buttonContainedGrey}
          onPress={() =>
            navigation.navigate("signinscreen", { screen: "dashboard" })
          }
          uppercase={false}
          labelStyle={style.bottomContainer.label}
        >
          Sign In
        </Button>
        <Button
          mode="text"
          style={style.bottomContainer.buttonOutlined}
          onPress={() => navigation.navigate("dashboard")}
          uppercase={false}
          labelStyle={style.bottomContainer.label}
        >
          Browse the App
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
