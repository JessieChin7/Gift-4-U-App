import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen, AboutScreen, FriendsListScreen, HistoryScreen, SettingScreen, FriendDetailScreen } from '../screens/profile';
import { backOptions, giftNavOptions } from './common';

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile_Home" options={backOptions} component={ProfileScreen} />
            <ProfileStack.Screen name="About" options={backOptions} component={AboutScreen} />
            <ProfileStack.Screen name="Friends_List" options={backOptions} component={FriendsListScreen} />
            <ProfileStack.Screen name="History" options={{ ...backOptions, title: '送禮與收禮紀錄' }} component={HistoryScreen} />
            <ProfileStack.Screen name="Setting" options={{ ...backOptions, title: '設定' }} component={SettingScreen} />
            <ProfileStack.Screen name="Friend_Detail" options={{ ...backOptions, ...giftNavOptions }} component={FriendDetailScreen} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;
