import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import WelcomeStackNavigator from "./WelcomeStackNavigator";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
  const [userToken, setUserToken] = useState('123')

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken === '' && <Stack.Screen name="Welcome_Navigator" options={{ headerShown: false }} component={WelcomeStackNavigator} />}
        <Stack.Screen name="Tab_Navigator" options={{ headerShown: false }} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
