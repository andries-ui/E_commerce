import { StyleSheet } from "react-native";

const style = StyleSheet.create({
parent:{
    padding: 28,
     alignItems: 'center'
    },
    title:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    image:{
        height: 300,
        width: 300,
        borderRadius: 150,
        marginVertical: 30,
        position:'relative',
        textAlignVertical:"center"
    },
    caption:{
        fontSize: 16,
         textAlign: 'center'
        }
})

export default style;