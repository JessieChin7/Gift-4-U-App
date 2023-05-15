import React from "react";
import { View, ScrollView } from 'react-native';
import { Image, Text } from "react-native-elements";
import CardProduct from "../../components/CardProduct";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./HomeScreen.style";
import { allProducts } from "../../shared/data/fakeData";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const recentIds = [5, 7, 8, 9]
  const moreIds = [3, 4, 6, 2, 1]

  const recents = allProducts.filter(product => recentIds.includes(product.id))
  const more = allProducts.filter(product => moreIds.includes(product.id))

  return (
    <ScrollView style={styles.container}>
      {/* <View>
        <Text style={styles.textHeading}>分類</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScrollContainer}>
          <RNBounceable onPress={() => {}} style={styles.categoryItem}>
            <Image source={require('../../assets/products/brush.png')} style={styles.categoryImage}/>
          </RNBounceable>
          <RNBounceable onPress={() => {}} style={styles.categoryItem}>
            <Image source={require('../../assets/products/hanger.png')} style={styles.categoryImage}/>
          </RNBounceable>
        </ScrollView>
      </View> */}

      <View style={styles.productListContainer}>
        <Text style={styles.textHeading}>最近瀏覽</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {recents.map(
            (product: any) => 
            <CardProduct 
              key={product.id}
              navigation={navigation} 
              src={product.src} 
              productName={product.name} 
              productPrice={product.price} 
              onPress={() => navigation.navigate('Product', { productId: product.id })}
            />
          )}
        </ScrollView>
      </View>

      <View style={styles.productListContainer}>
        <Text style={styles.textHeading}>發現更多</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {more.map(
            (product: any) => 
            <CardProduct 
              key={product.id}
              navigation={navigation} 
              src={product.src} 
              productName={product.name} 
              productPrice={product.price} 
              onPress={() => navigation.navigate('Product', { productId: product.id })}
            />
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;