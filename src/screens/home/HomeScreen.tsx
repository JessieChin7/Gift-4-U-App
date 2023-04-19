import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import Icon, { IconType } from "react-native-dynamic-vector-icons";


import { StatusBar } from 'expo-status-bar';

import { styles } from "./HomeScreen.style";

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const HomeScreen = ({navigation, route} :HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>123444</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;