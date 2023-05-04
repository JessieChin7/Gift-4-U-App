import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TABS, SCREENS } from "../types";

import TabNavigator from "./TabNavigator";
import WelcomeStackNavigator from "./WelcomeStackNavigator";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
  // TODO: localstorage for first time tutorial
  const [userToken, setUserToken] = useState('123')

  return (
    <NavigationContainer>
      <Stack.Navigator>
          {userToken === '' && <Stack.Screen name={SCREENS.WELCOME} options={{ headerShown: false }}>{WelcomeStackNavigator}</Stack.Screen>}
          <Stack.Screen name={TABS.NAVIGATOR} options={{ headerShown: false }}>{TabNavigator}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
