import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import ToggleSwitch from "toggle-switch-react-native";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import headerstyle from '../../stylesheet/sharable/hearder'
import { Icon } from "react-native-elements";
import Colors from "../../stylesheet/color";

const SettingScreen = ({ navigation }) =>
{
  
  const [ison, setison] = useState(false);

  const handleToogle = () =>
  {
    ison ? setison(false) : setison(true);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.Grey}/> 
      <View style={headerstyle.container}>
        <View style={headerstyle.icon}>
          <Icon
            type="ionicon"
            name="arrow-back"
            size={28}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={headerstyle.text}>Settings </Text>
      </View>

      <View style={styles.itemView}>
        <View style={styles.contentview}>
          <View style={styles.iconView}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome5 name="info-circle" size={22} color={Colors.Black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titlehead}>Information & Contact</Text>
          <Text style={styles.titleDesc}>Profile information and contact</Text>
        </View>
      </View>

      <View style={styles.itemView}>
        <View style={styles.contentview}>
          <View style={styles.iconView}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome5 name="lock" size={22} color={Colors.Black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titlehead}>Password</Text>
          <Text style={styles.titleDesc}>Profile information and contact</Text>
        </View>
      </View>
      <View style={styles.itemView}>
        <View style={styles.contentview}>
          <View style={styles.iconView}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome5
                name="globe"
                size={22}
                color={Colors.Black}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.titlehead}>Langauge</Text>
        </View>

        <Text style={{color:Colors.Green, fontSize:14, right:10}} onPress={()=> console.log('choose language')}>English</Text>
      </View>

      <View style={styles.itemView}>
        <View style={styles.contentview}>
          <View style={styles.iconView}>
            <TouchableOpacity style={styles.icon}>
              <FontAwesome5 name="bell" size={22} color={Colors.Black} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titlehead}>Notification</Text>
        </View>

        <ToggleSwitch
          isOn={ison}
          onColor={Colors.Green}
          offColor={Colors.GreyLight}
          size="medium"
          onToggle={handleToogle}
        />
      </View>
    </View>
  );
};

export default SettingScreen;

//colors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Grey,
    width: WP("100%"),
    height: HP("100%"),
    alignItems: "center",
  },

  itemView: {
    width: "90%",
    height: 80,
    backgroundColor: Colors.White,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems:'center'
  },
  contentview: {
    width:'80%'
  },
  iconView: {
    width: 40,
    height: 40,
    elevation: 1,
    marginHorizontal: 20,
    top:20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
  titlehead: {
    fontSize: 18,
    fontWeight: "normal",
    bottom: 20,
    left: 80,
  },
  titleDesc: {
    fontSize: 14,
    fontWeight: "normal",
    left: 80,
    bottom: 18,
    color: Colors.GreyLight,
  },
});
