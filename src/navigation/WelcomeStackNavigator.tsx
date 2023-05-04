import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { backOptions } from './common';
import { WelcomeFirst, WelcomeSecond, WelcomeThird, WelcomeFourth } from "../screens/welcome";
import { LoginHomeScreen, LoginScreen } from "../screens/login";
import { RegisterScreen, VerificationScreen, SuccessScreen } from "../screens/register";

const WelcomeStack = createNativeStackNavigator();

const WelcomeStackNavigator: React.FC = () => {
    return (
        <WelcomeStack.Navigator>
            <WelcomeStack.Screen name="Welcome_First" options={{ title: '', headerTransparent: true, animation: "none" }}>{WelcomeFirst}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Welcome_Second" options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeSecond}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Welcome_Third" options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeThird}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Welcome_Fourth" options={{ ...backOptions, headerTransparent: true, animation: "none" }}>{WelcomeFourth}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Login_Home" options={{ headerShown: false }}>{LoginHomeScreen}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Login" options={{ ...backOptions, headerTransparent: true }}>{LoginScreen}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Register" options={{ ...backOptions, headerTransparent: true }}>{RegisterScreen}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Verification" options={{ ...backOptions, headerTransparent: true }}>{VerificationScreen}</WelcomeStack.Screen>
            <WelcomeStack.Screen name="Success" options={{ ...backOptions, headerTransparent: true }}>{SuccessScreen}</WelcomeStack.Screen>
      </WelcomeStack.Navigator>
    );
};

export default WelcomeStackNavigator;
