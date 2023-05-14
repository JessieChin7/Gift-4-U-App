import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { headerOptions, backOptions } from './common';
import ProfileStackNavigator from './ProfileStackNavigator';
import { ResultScreen, SearchScreen } from '../screens/search';
const SearchStack = createNativeStackNavigator();

const SearchStackNavigator: React.FC = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" options={headerOptions} component={SearchScreen} />
            <SearchStack.Screen name="Result" options={{ ...backOptions, title: '搜尋結果' }} component={ResultScreen} />
            <SearchStack.Screen name="Profile" options={{ headerShown: false }} component={ProfileStackNavigator} />
        </SearchStack.Navigator>
    );
};

export default SearchStackNavigator;
