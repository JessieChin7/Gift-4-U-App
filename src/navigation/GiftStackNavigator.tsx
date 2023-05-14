import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroScreen, FriendSelectionScreen, GameScreen, FormEditScreen, FormPreviewScreen, StickerScreen, FinishScreen, ChatRoomScreen } from '../screens/gift';
import ProfileStackNavigator from './ProfileStackNavigator';
import { headerOptions, backOptions } from './common';
const GiftStack = createNativeStackNavigator();
const GiftStackNavigator: React.FC = () => {
    return (
        <GiftStack.Navigator screenOptions={{ headerShown: false, }}>
            <GiftStack.Screen name="IntroScreen" component={IntroScreen} />
            <GiftStack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
            <GiftStack.Screen name="FriendSelection" component={FriendSelectionScreen} />
            <GiftStack.Screen name="GameScreen" component={GameScreen} />
            <GiftStack.Screen name="FormEditScreen" component={FormEditScreen} />
            <GiftStack.Screen name="FormPreviewScreen" component={FormPreviewScreen} />
            <GiftStack.Screen name="StickerScreen" component={StickerScreen} />
            <GiftStack.Screen name="FinishScreen" component={FinishScreen} />
            <GiftStack.Screen name="Profile" options={{ headerShown: false }} component={ProfileStackNavigator} />
        </GiftStack.Navigator>
    );
};

export default GiftStackNavigator;

