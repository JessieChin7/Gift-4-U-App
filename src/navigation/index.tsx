import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home/Home";
import Game from "../screens/game/Game";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
