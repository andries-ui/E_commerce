import { Image, StatusBar, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import style from "../../stylesheet/views/profile";
import Colors from "../../stylesheet/color";
import { Icon } from "react-native-elements";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Green} />

      <View style={style.headercontainer}>
        <View
          style={{
            top: 24,
            left: 5,
          }}
        >
          <Icon
            onPress={() => navigation.goBack()}
            type="ionicon"
            name="arrow-back"
            size={26}
          />
        </View>
        <Text style={style.labelmy}>My</Text>
        <Text style={style.labelaccount}>account</Text>
      </View>
      <View style={style.profilecontainer}>
        <View style={style.image}>
          <Image
            style={style.image}
            source={require("../../../assets/images/image4.png")}
          />
          {/* <Icon type="ionicon" name="camera-reverse" /> */}
        </View>

        <View style={style.informationview}>
          <Text style={style.labelusername}>Karabo ngoatla</Text>
          <Text style={style.labelcontact}>+27 83 696 4625</Text>
        </View>
      </View>

      <View style={style.container}>
        <View style={style.itemcontainer}>
          <TouchableHighlight
            style={{ borderRadius: 7 }}
            onPress={() => navigation.navigate("settingscreen")}
          >
            <View style={style.item}>
              <Icon
                type="material-community"
                name="wallet-giftcard"
                style={style.icon}
                size={28}
              />
              <Text style={style.label}>Voucher</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ borderRadius: 7 }}
            onPress={() => navigation.navigate("cardscreen")}
          >
            <View style={style.item}>
              <Icon
                type="font-awesome-5"
                name="credit-card"
                style={style.icon}
                size={28}
              />
              <Text style={style.label}>Payment</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={style.itemcontainer}>
          <TouchableHighlight
            style={{ borderRadius: 7 }}
            onPress={() => navigation.navigate("cardscreen")}
          >
            <View style={style.item}>
              <Icon
                type="font-awesome-5"
                name="map-marker-alt"
                style={style.icon}
                size={28}
              />
              <Text style={style.label}>Address</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={{ borderRadius: 7 }}
            onPress={() => navigation.navigate("settingscreen")}
          >
            <View style={style.item}>
              <Icon
                type="font-awesome-5"
                name="cog"
                style={style.icon}
                size={28}
              />
              <Text style={style.label}>Settings</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
