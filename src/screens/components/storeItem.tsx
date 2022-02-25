import React from "react";
import { Image, Text, View } from "react-native";
import style from "../../stylesheet/components/carauselItem";
import styleButton from "../../stylesheet/components/button";
import { Button, Checkbox, TextInput } from "react-native-paper";
import Colors from "../../stylesheet/color";
import { Icon } from "react-native-elements";

interface prop {
  key: number;
  image: number;
  remainingItems: string;
  shopName: string;
  distance: string;
  address: string;
  onPress: any;
}

const StoreItem = (props:prop) =>
{
      const {
        key,
        image,
        remainingItems,
        shopName,
        distance,
  address,
        onPress,
      } = props;
    return (
      <View style={style.parent} key={key}>
        <Image  style={style.image} source={image} />

        <View style={style.content}>
          <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: "bold" }}>
            {shopName}
          </Text>
          <View style={style.addresView}>
            <Icon
              type="ionicon"
              name="location"
              size={16}
              color={Colors.Yellow}
            />
            <Text style={{ marginLeft: 5 }}>{distance}</Text>

            <Text style={{ marginLeft: 5 }}>{address}</Text>
          </View>

          <Button
            mode="text"
            style={style.buttonYellow}
            uppercase={false}
            labelStyle={styleButton.buttom.labelWhite}
            onPress={onPress}
          >
            {remainingItems} items reduced today
          </Button>
        </View>
      </View>
    );
}

export default StoreItem;