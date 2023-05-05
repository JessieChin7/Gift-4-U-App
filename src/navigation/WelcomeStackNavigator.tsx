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
            <WelcomeStack.Screen name="Welcome_First" options={{ title: '', headerTransparent: true, animation: "none" }} component={WelcomeFirst} />
            <WelcomeStack.Screen name="Welcome_Second" options={{ ...backOptions, headerTransparent: true, animation: "none" }} component={WelcomeSecond} />
            <WelcomeStack.Screen name="Welcome_Third" options={{ ...backOptions, headerTransparent: true, animation: "none" }} component={WelcomeThird} />
            <WelcomeStack.Screen name="Welcome_Fourth" options={{ ...backOptions, headerTransparent: true, animation: "none" }} component={WelcomeFourth} />
            <WelcomeStack.Screen name="Login_Home" options={{ headerShown: false }} component={LoginHomeScreen} />
            <WelcomeStack.Screen name="Login" options={{ ...backOptions, headerTransparent: true }} component={LoginScreen} />
            <WelcomeStack.Screen name="Register" options={{ ...backOptions, headerTransparent: true }} component={RegisterScreen} />
            <WelcomeStack.Screen name="Verification" options={{ ...backOptions, headerTransparent: true }} component={VerificationScreen} />
            <WelcomeStack.Screen name="Success" options={{ ...backOptions, headerTransparent: true }} component={SuccessScreen} />
      </WelcomeStack.Navigator>
    );
};

export default WelcomeStackNavigator;
