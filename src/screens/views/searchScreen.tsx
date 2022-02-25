import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import style from '../../stylesheet/views/searchscreenstyle'
import headerstyle from "../../stylesheet/sharable/hearder";
import { TextInput } from 'react-native-paper';
import Colors from '../../stylesheet/color';

const searchScreen =({navigation})=> {
 
  let results:any;
    
    return (
      <View style={style}>
        <View style={headerstyle.container}>
          <View style={headerstyle.icon}>
            <Icon type="ionicon" name="arrow-back" size={28} onPress={()=> navigation.goBack()}/>
          </View>
          <TextInput
            left={<TextInput.Icon name="magnify" color={Colors.Yellow} />}
            right={<TextInput.Icon name="close-circle"/> }
            placeholder="Search for meals near you"
            editable={true}
          />
        </View>
        
        {results ? null :
          <View style={style.emptycontainer}>
            <Image source={require('../../../assets/images/search.png')} style={{width:150, height:150}}/>
            <Text style={{ fontSize:18, color:Colors.GreyLight }}>No results found</Text>
          </View>}

      </View>
    )
}

export default searchScreen