import React from "react";
import { TouchableHighlight } from "react-native";
import { Text } from "react-native-paper";
import style from "../../stylesheet/components/button";

const Button =(onPress?:any, label:any)=>{
    return(
        <Button mode='text' style={style.buttom.button} 
                onPress={onPress} uppercase={false} labelStyle={style.buttom.label} > {label}</Button>
             
    )
}

export {Button};