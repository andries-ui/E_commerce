import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, StatusBar, View } from "react-native";
import { Text } from "react-native-paper";
import Colors from "../../stylesheet/color";
import style from "../../stylesheet/views/splashscreen";

const SplashScreen =({navigation})=>{


    const moveAnim = useRef(new Animated.Value(0)).current;

    useEffect(()=>{

         setTimeout(() =>{
                navigation.navigate('welcomescreen')
            }, 3000);
        Animated.timing(moveAnim, {
            duration:2000,
            toValue:Dimensions.get('window').width,
            delay:0,
            useNativeDriver:true
        }).start()

    },[]);

    return (
      <View style={style.body}>
        <StatusBar barStyle="light" backgroundColor={Colors.Green} />
        <View style={style.container}>
          <Image source={require("../../../assets/images/logo.png")}></Image>
          <Animated.Text style={style.caption}>
            Order Surplus food from the Suburb or Ko Kasi and get it delivered
            easily to your door
          </Animated.Text>
        </View>
      </View>
    );
}

export default SplashScreen;