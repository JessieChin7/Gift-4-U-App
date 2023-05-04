import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen, AboutScreen, FriendListScreen, HistoryScreen, SettingScreen } from '../screens/profile';
import { backOptions } from './common';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile_Home" options={backOptions}>{ProfileScreen}</ProfileStack.Screen>
            <ProfileStack.Screen name="About" options={backOptions}>{AboutScreen}</ProfileStack.Screen>
            <ProfileStack.Screen name="Friend_List" options={backOptions}>{FriendListScreen}</ProfileStack.Screen>
            <ProfileStack.Screen name="History" options={{ ...backOptions, title: '送禮與收禮紀錄' }}>{HistoryScreen}</ProfileStack.Screen>
            <ProfileStack.Screen name="Setting" options={{ ...backOptions, title: '設定' }}>{SettingScreen}</ProfileStack.Screen>
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;
