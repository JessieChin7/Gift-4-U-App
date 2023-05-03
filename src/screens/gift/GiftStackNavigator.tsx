// screens/gift/GiftStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FriendSelectionScreen from './FriendSelectionScreen';
import Game from './Game';
const Stack = createNativeStackNavigator();

const GiftStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="FriendSelection" component={FriendSelectionScreen} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    );
};

export default GiftStackNavigator;
