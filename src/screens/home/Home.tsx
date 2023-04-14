import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";

import { StatusBar } from 'expo-status-bar';

import { styles } from "./Home.style";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>123</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;