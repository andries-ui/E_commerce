import React from "react";
import { Text, TextInput, View } from "react-native";
import style from "../../stylesheet/components/inputbox";


const InputBox =(label:any)=>{
    return(
        <View>
            <Text >{label.label}</Text>
            <TextInput style={style.input}></TextInput>
        </View>
    )
}

export default InputBox;