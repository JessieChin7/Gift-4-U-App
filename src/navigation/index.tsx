import React from "react";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS, APP_NAME } from "../types";

import HomeScreen from "../screens/home/HomeScreen";
import Game from "../screens/game/Game";
import SearchScreen from "../screens/search/SearchScreen";
import ShopScreen from "../screens/shop/ShopScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {

  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.GIFT:
        iconName = focused ? "gift" : "gift-outline";
        break;
      case SCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case SCREENS.SHOP:
        iconName = focused ? "cart" : "cart-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  const renderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
          tabBarActiveTintColor: "#667080",
          tabBarInactiveTintColor: "#e8ecf4",
          tabBarShowLabel: false,
      })}
      >
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen}/>
        <Tab.Screen name={SCREENS.GIFT} component={Game} />
        <Tab.Screen name={SCREENS.SEARCH} component={SearchScreen} />
        <Tab.Screen name={SCREENS.SHOP} component={ShopScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name={APP_NAME}>{renderTabNavigation}</Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
