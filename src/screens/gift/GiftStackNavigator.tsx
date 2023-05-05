// screens/gift/GiftStackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import FriendSelectionScreen from './FriendSelectionScreen';
import GameScreen from './GameScreen';
import FormEditScreen from './FormEditScreen';
import FormPreviewScreen from './FormPreviewScreen';
import StickerScreen from './StickerScreen';
import FinishScreen from './FinishScreen';

const Stack = createNativeStackNavigator();

const GiftStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="FriendSelection" component={FriendSelectionScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="FormEditScreen" component={FormEditScreen} />
            <Stack.Screen name="FormPreviewScreen" component={FormPreviewScreen} />
            <Stack.Screen name="StickerScreen" component={StickerScreen} />
            <Stack.Screen name="FinishScreen" component={FinishScreen} />
        </Stack.Navigator>
    );
};

export default GiftStackNavigator;
