import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/views/splashscreen";
import WelcomeScreen from "../screens/views/welcomScreen";
import SignInScreen from "../screens/views/signinScreen";
import SignUpScreen from "../screens/views/signupScreen";
import Dashboard from "../screens/views/dashboardScreen";
import BottomNavigation from "./bottonNavRoute";
import ProfileScreen from "../screens/views/profile";
import FavouriteScreen from "../screens/views/favouriteScreen";
import MarketScreen from "../screens/views/marketScreen";
import StoreScreen from "../screens/views/storeScreen";
import CartScreen from "../screens/views/myCart";
import PaymentScreen from "../screens/views/payment";
import SettingScreen from "../screens/views/settingsscreen";
import NearMarketScreen from "../screens/views/nearmarketScreen";
import FavouriteItemsScreen from "../screens/views/favouriteitemsScreen";
import searchScreen from "../screens/views/searchScreen";
import orderScreen from "../screens/views/order";
import cardScreen from "../screens/views/cardsScreen";
import AccepteOrder from "../screens/views/acceptedOrder";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"welcomescreen"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={"welcomescreen"} component={WelcomeScreen} />
        <Stack.Screen name={"signinscreen"} component={SignInScreen} />
        <Stack.Screen name={"signupscreen"} component={SignUpScreen} />
        <Stack.Screen name={"dashboard"} component={Dashboard} />
        <Stack.Screen name={"bottomNav"} component={BottomNavigation} />
        <Stack.Screen name={"profilescreen"} component={ProfileScreen} />
        <Stack.Screen name={"marketscreen"} component={MarketScreen} />
        <Stack.Screen name={"favouritescreen"} component={FavouriteScreen} />
        <Stack.Screen name={"itemscreen"} component={ProfileScreen} />
        <Stack.Screen name={"storescreen"} component={StoreScreen} />
         <Stack.Screen name={"cartscreen"} component={CartScreen} /> 
        <Stack.Screen name={"paymentscreen"} component={PaymentScreen} />
        <Stack.Screen name={"settingscreen"} component={SettingScreen} />
        <Stack.Screen name={"nearsarketscreen"} component={NearMarketScreen} />
        <Stack.Screen name={"favouriteitemsscreen"} component={FavouriteItemsScreen} />
        <Stack.Screen name={"searchscreen"} component={searchScreen} />
        <Stack.Screen name={"orderscreen"} component={orderScreen} />
        <Stack.Screen name={"cardscreen"} component={cardScreen} />
        <Stack.Screen name={"acceptedorderscreen"} component={AccepteOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
