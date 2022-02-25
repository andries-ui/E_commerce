import { StyleSheet } from "react-native";
import Colors from "../color";

const style = StyleSheet.create({

    parent: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.Grey,
    },
    topContainer: {
        height:'80%',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        marginHorizontal: 30
    },
    status: {
        textAlign: 'center',
        paddingHorizontal: 40,
        fontWeight: '900',
        fontSize: 22,
        top: 20
    },
    message: {
        textAlign: 'center',
        paddingHorizontal: 40,
        top: 30,
        color:Colors.GreyLight
    },
    bottomContainer: {
        marginVertical: 20
    },
    contained: {
        marginHorizontal: 30,
    },
    text: {
        marginHorizontal: 10,
        marginVertical: 10
        
    },
})

export default style;