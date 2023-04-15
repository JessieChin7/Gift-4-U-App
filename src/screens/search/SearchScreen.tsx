import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";

import { StatusBar } from 'expo-status-bar';

import { styles } from "./SearchScreen.style";

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;