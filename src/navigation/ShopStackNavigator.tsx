import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ShopScreen } from '../screens/shop';

import { headerOptions } from './common';
import ProfileStackNavigator from './ProfileStackNavigator';

const ShopStack = createNativeStackNavigator();

const ShopStackNavigator: React.FC = () => {
    return (
        <ShopStack.Navigator>
            <ShopStack.Screen name="Shop" options={headerOptions}>{ShopScreen}</ShopStack.Screen>
            <ShopStack.Screen name="Profile" options={{ headerShown: false }}>{ProfileStackNavigator}</ShopStack.Screen>
        </ShopStack.Navigator>
    );
};

export default ShopStackNavigator;
