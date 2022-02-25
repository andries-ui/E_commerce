import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({

    body:{
        backgroundColor: Colors.Green,
        height: '100%',
    },
    container:{
        width:'100%',
        top: "50%",
        justifyContent:'center',
        alignItems:"center"
    },
    caption:{
        color:Colors.White,
        fontSize: 16,
        top: 20,
        textAlign:"center",
        width: '70%'
    }
})

export default style;