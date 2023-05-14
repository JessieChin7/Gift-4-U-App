import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { TABS } from "../shared/types";
import HomeStackNavigator from './HomeStackNavigator';
import GiftStackNavigator from './GiftStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import ShopStackNavigator from './ShopStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
    const renderTabIcon = (
        route: any,
        focused: boolean,
        color: string,
        size: number,
      ) => {
        let iconName = "home";
        switch (route.name) {
          case TABS.HOME_TAB:
            iconName = focused ? "home" : "home-outline";
            break;
          case TABS.GIFT_TAB:
            iconName = focused ? "gift" : "gift-outline";
            break;
          case TABS.SEARCH_TAB:
            iconName = focused ? "search" : "search-outline";
            break;
          case TABS.SHOP_TAB:
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
          <Tab.Screen name={TABS.HOME_TAB} component={HomeStackNavigator}/>
          <Tab.Screen name={TABS.GIFT_TAB} component={GiftStackNavigator}/>
          <Tab.Screen name={TABS.SEARCH_TAB} component={SearchStackNavigator}/>
          <Tab.Screen name={TABS.SHOP_TAB} component={ShopStackNavigator}/>
        </Tab.Navigator>
      );
};

export default TabNavigator;
