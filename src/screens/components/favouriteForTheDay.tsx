import React from "react";
import { Text, View } from "react-native";
import { Icon, Image } from "react-native-elements";
import { Button } from "react-native-paper";
import Colors from "../../stylesheet/color";
import style from "../../stylesheet/components/favouriteForTheDayStyle";

interface prop {
  key: number;
  image: number;
  desc: string;
  title: string;
  normalPrice: string;
  newPrice: string;
  remainingItems: string;
  shopName: string;
  distance: string;
  closingTime: string;
  action: string;
  onPress: any;
}

const favouriteForTheDay = (props: prop) => {
  const {
    key,
    image,
    desc,
    title,
    normalPrice,
    newPrice,
    remainingItems,
    shopName,
    distance,
    closingTime,
    action,
    onPress,
  } = props;

  return (
    <View style={style.Container} key={key}>
      <View style={style.flexContainer}>
        <View style={style.image}>
          <Image
            source={image}
            style={{width:'100%', height:160, borderRadius:5}}
          />
          
        </View>
        <View style={style.image}>
          <Text style={style.caption}>{desc}</Text>
          <Text style={style.title}>{title}</Text>
          <View style={style.flexContainer}>
            <Text style={style.normalprice}>{normalPrice}</Text>
            <Text style={style.recentprice}>{newPrice}</Text>
          </View>
          <View style={style.flexContainer}>
            <Text style={style.remainingItems}>{remainingItems}</Text>
            <Text style={style.remainingitemtext}>Items left</Text>
          </View>
        </View>
      </View>

      <Text style={style.shoptitle}>{shopName}</Text>
      <View style={style.flexContainer}>
        <Icon type="ionicon" name="location" size={12} color={Colors.Yellow} />
        <Text style={style.distance}>{distance}</Text>
        <Text style={style.operation}>{closingTime}</Text>
      </View>
      <Button mode="contained" style={style.button} onPress={onPress}>
        {action}
      </Button>
    </View>
  );
};

export default favouriteForTheDay;
