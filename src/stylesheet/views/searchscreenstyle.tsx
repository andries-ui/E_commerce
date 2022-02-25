import { StyleSheet } from "react-native";
import Colors from "../color";


const style = StyleSheet.create({
    parent: {
        backgroundColor:Colors.GreenLighter
    },


    //empty array style
    emptycontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginBottom:-100
    }
})

export default style;