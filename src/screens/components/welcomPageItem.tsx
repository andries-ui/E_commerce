import React from "react";
import { Text, View, Image } from "react-native";
import style from "../../stylesheet/components/welcomeItemStyle";

interface WelcomeProps {
  title?: string;
  image: number;
  caption: string;
}

const WelcomePagerItem = (props: WelcomeProps) => {
  const { title, image, caption } = props;
  return (
    <View style={style.container}>
      <Text style={style.title}> {title} </Text>
      <Image style={style.image} source={image} />
      <Text style={style.caption}>{caption}</Text>
    </View>
  );
};

export default WelcomePagerItem;
