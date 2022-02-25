import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {FontAwesome5} from '@expo/vector-icons'
import { Image, View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import style from "../../stylesheet/views/dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from "../../stylesheet/color";
import HomeScreen from "./HomeScreen";
import FavouriteScreen from "./favouriteScreen";
import MarketScreen from "./marketScreen";
import { Icon } from "react-native-elements";
import BottomNavigation from "../../routes/bottonNavRoute";

const Tab = createBottomTabNavigator();

const Dashboard =() =>{
    return (
           
           <BottomNavigation/>   
        
    )
}

export default Dashboard;