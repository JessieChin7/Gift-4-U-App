import React from "react";
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";
import CardHomeProduct from "./CardHomeProduct";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./HomeScreen.style";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textHeading}>分類</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScrollContainer}>
          <RNBounceable onPress={() => {}} style={styles.categoryItem}>
            <Image source={require('../../assets/product-brush.png')} style={styles.categoryImage}/>
          </RNBounceable>
          <RNBounceable onPress={() => {}} style={styles.categoryItem}>
            <Image source={require('../../assets/product-brush.png')} style={styles.categoryImage}/>
          </RNBounceable>
        </ScrollView>
      </View>

      <View style={styles.productListContainer}>
        <Text style={styles.textHeading}>最近瀏覽</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <CardHomeProduct />
          <CardHomeProduct />
        </ScrollView>
      </View>

      <View style={styles.productListContainer}>
        <Text style={styles.textHeading}>發現更多</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <CardHomeProduct />
          <CardHomeProduct />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;