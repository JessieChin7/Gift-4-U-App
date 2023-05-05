import React from "react";
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-elements";
import CardCartProduct from "./CardCartProduct";


import { styles } from "./ShopScreen.style";

interface ShopScreenProps {}

const ShopScreen: React.FC<ShopScreenProps> = () => {
  return (
    <View style={styles.container}>


      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeading}>願望清單</Text>
        <View style={styles.divider}/>
        <CardCartProduct />
        <CardCartProduct />
        <CardCartProduct />
        <CardCartProduct />
        <CardCartProduct />
        <CardCartProduct />
        <CardCartProduct />
      </ScrollView>
    </View>
  );
};

export default ShopScreen;