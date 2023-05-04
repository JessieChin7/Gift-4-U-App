import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from '../screens/game/Game';

import { headerOptions } from './common';
import ProfileStackNavigator from './ProfileStackNavigator';

const GiftStack = createNativeStackNavigator();

const GiftStackNavigator: React.FC = () => {
    return (
        <GiftStack.Navigator>
            <GiftStack.Screen name="Game" options={headerOptions} component={Game}/>
            <GiftStack.Screen name="Profile" options={{ headerShown: false }} component={ProfileStackNavigator} />
        </GiftStack.Navigator>
    );
};

export default GiftStackNavigator;
