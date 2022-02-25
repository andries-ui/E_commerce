import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import { Button } from 'react-native-paper';
import Colors from '../../stylesheet/color';
import style from '../../stylesheet/views/acceptedOrderStyle';

const AccepteOrder = () =>
{
    return (
        <View style={style.parent}>
            <StatusBar backgroundColor={ Colors.Grey}/>
            <View style={style.topContainer}>
                <Image source={require('../../../assets/images/done.png')} style={style.image} resizeMode={"contain"} />
                <Text style={style.status}>Your Order has been accepted</Text>
                <Text style={style.message}>Your items has been placed and is on it’s way to being processed</Text>
            </View>

            <View style={style.bottomContainer}>
                <Button style={style.contained} mode='contained' >Track Order</Button>
                <Button style={style.text} mode='text' >Back to home</Button>
            </View>
        </View>
    )

}

export default AccepteOrder