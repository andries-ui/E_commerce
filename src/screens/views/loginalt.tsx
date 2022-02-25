import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import altstyle from '../../stylesheet/views/loginalt';

interface prop{
    browse: any,
    signin: any,
    signup:any
}
 const LoginAlt=(props:prop)=> {
  
     const { browse, signin, signup } = props;
      return (
        <>
          <View style={altstyle.parent}></View>
          <View style={altstyle.container}>
            <Text style={altstyle.label}>
              You need to sign Up or Sign in before you are able to check out
            </Text>
            <Button onPress={signup} style={altstyle.button1} labelStyle={altstyle.labelbutton1}>
              Sign Up
            </Button>
            <Button onPress={signin} style={altstyle.button2} labelStyle={altstyle.labelbutton2}>
              Sign in
            </Button>
            <Button
              labelStyle={altstyle.labelbutton1}
              style={altstyle.button3}
                      mode="text"
                      onPress={browse}
            >
              Continue browsing the App
            </Button>
          </View>
        </>
      );
  
     
}
export default LoginAlt;