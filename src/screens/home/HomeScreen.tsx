import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";

import { StatusBar } from 'expo-status-bar';

import { styles } from "./HomeScreen.style";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>123444</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;