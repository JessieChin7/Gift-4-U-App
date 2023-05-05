import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { headerOptions } from './common';
import ProfileStackNavigator from './ProfileStackNavigator';
import SearchScreen from '../screens/search/SearchScreen';

const SearchStack = createNativeStackNavigator();

const SearchStackNavigator: React.FC = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Game" options={headerOptions} component={SearchScreen} />
            <SearchStack.Screen name="Profile" options={{ headerShown: false }} component={ProfileStackNavigator} />
        </SearchStack.Navigator>
    );
};

export default SearchStackNavigator;
