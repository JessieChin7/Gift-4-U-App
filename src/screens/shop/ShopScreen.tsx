import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";

import { StatusBar } from 'expo-status-bar';

import { styles } from "./ShopScreen.style";

interface ShopScreenProps {}

const ShopScreen: React.FC<ShopScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Shop</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ShopScreen;