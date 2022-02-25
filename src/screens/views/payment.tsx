import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Colors from '../../stylesheet/color';
import style from "../../stylesheet/views/welcomeScreenStyle";

const PaymentScreen =()=>{
 
    return (
      <>
        <View style={style.topContainer.container}>
          <View
            style={{ flexGrow: 1, backgroundColor: Colors.GreyLight, height: 30 }}
          />
          <View
            style={{
              flexGrow: 1,
              backgroundColor:Colors.GreyLight,
              height: 30,
              marginLeft: 8,
            }}
          />
          <View
            style={{
              flexGrow: 1,
              backgroundColor:Colors.GreyLight,
              height: 30,
              marginLeft: 8,
            }}
          />
          <View
            style={{
              flexGrow: 1,
              backgroundColor:Colors.GreyLight,
              height: 30,
              marginLeft: 8,
            }}
          />
        </View>
      </>
    );
  
}

export default PaymentScreen;
