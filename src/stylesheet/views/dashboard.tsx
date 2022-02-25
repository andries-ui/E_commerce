import React from "react";
import Colors from "../color";

const style = {

     parent: {
        backgroundColor: Colors.DarkBlue,
        height: '100%',
        padding: '3%',
         paddingTop: 25
        },

    header: {
       
        view: {
            width: '100%',
            flexDirection: 'row',
            top: 5,
        },
        greatingText: {
            color: Colors.White,
            fontSize:26,
        },
        userName: {
            color: Colors.Yellow,
            fontSize: 26,
            marginLeft: 10
        },
        image: {
            color: Colors.Yellow,
            fontSize: 20,
            marginLeft: 10,
            height: 40,
            width: 40,
            borderRadius: 20,
            position: 'absolute',
            right: '3%',
            top: 30
        },
        address: {
            color: Colors.White,
            fontSize: 16,
            marginLeft: 10
        },
        addressIcon: {
            color: Colors.White,
            fontSize: 16,
            marginLeft: 10
        },
        search: {
         width: '97%',
         maxLength: 250,
         autoCorrect: false,
         keyboardType: 'text',
         autoCapitalize: 'auto',
         underlineColorAndroid: 'transparent',
         backgroundColor:Colors.White,
         borderRadius: 7,
         letterSpacing:5,
         height: 40,
         justifyContext: 'center',
         top: 10
         //onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus()
      },

    },

    navigation:{
        backgroundColor: Colors.Blue,
    }
}

export default style