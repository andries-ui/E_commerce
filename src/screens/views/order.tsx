import React from 'react';
import { Text, View } from 'react-native';
import style from '../../stylesheet/views/orderstylr';
import Colors from "../../stylesheet/color";
import headerstyle from "../../stylesheet/sharable/hearder";
import { Icon } from 'react-native-elements';

const OrderScreen =()=>{
  
    return (
      <View style={style.parent}>
            <View style={headerstyle.container}>
                <View style={headerstyle.icon}>
                    <Icon type="ionicon" name="card" size={28} />
                </View>
                <Text style={headerstyle.text}>Orders </Text>
            </View>


      </View>
    )
}

export default OrderScreen
