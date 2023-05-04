import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen } from '../screens/home';

import { headerOptions } from './common';
import ProfileStackNavigator from './ProfileStackNavigator';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" options={headerOptions}>{HomeScreen}</HomeStack.Screen>
            <HomeStack.Screen name="Product" options={{ headerShown: false }}>{ProductScreen}</HomeStack.Screen>
            <HomeStack.Screen name="Profile" options={{ headerShown: false }}>{ProfileStackNavigator}</HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
