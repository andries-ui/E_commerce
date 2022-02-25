import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "react-native-elements";
import { View } from "react-native";
import MarketScreen from "../screens/views/marketScreen";
import FavouriteScreen from "../screens/views/favouriteScreen";
import HomeScreen from "../screens/views/HomeScreen";
import Colors from "../stylesheet/color";
import orderScreen from "../screens/views/order";

const Tab = createBottomTabNavigator();

const BottomNavigation=()=>{
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          //sytling the Tab
          tabBarStyle: {
            backgroundColor: Colors.White,
            position: "absolute",
            height: 50,
            borderRadius: 0,
              shadowColor: "Green",
            padding: 0,
            shadowOpacity: 0.08,
            shadowOffset: {
              width: 20,
              height: 10,
            },
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: "30%" }}>
                <Icon
                  name={focused ? "home" : "home-outline"}
                  size={focused ? 28 : 22}
                  type="ionicon"
                  color={focused ? Colors.Green : "gray"}
                ></Icon>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Card"
          component={orderScreen}
          options={{
            tabBarLabel: "Card",
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: "30%" }}>
                <Icon
                  name={focused ? "card" : "card-outline"}
                  size={focused ? 28 : 22}
                  type="ionicon"
                  color={focused ? Colors.Green : "gray"}
                ></Icon>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarLabel: "Favourite",
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: "30%" }}>
                <Icon
                  name={focused ? "heart" : "heart-outline"}
                  size={focused ? 28 : 22}
                  type="ionicon"
                  color={focused ? Colors.Green : "gray"}
                ></Icon>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Market"
          component={MarketScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <View style={{ position: "absolute", top: "30%" }}>
                <Icon
                  name={focused ? "cart" : "cart-outline"}
                  size={focused ? 28 : 22}
                  type="ionicon"
                  color={focused ? Colors.Green : "gray"}
                ></Icon>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default BottomNavigation;