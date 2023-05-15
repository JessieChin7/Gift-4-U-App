import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from "react-native-elements";

import { useAppContext } from "../../context/AppContext";

import CardCartProduct from "./CardCartProduct";
import { styles } from "./ShopScreen.style";

interface ShopScreenProps {
  navigation: any;
}

const ShopScreen: React.FC<ShopScreenProps> = ({ navigation }) => {
  const [isWishList, setIsWishList] = useState(true)
  const {wishListProducts, cartProducts} = useAppContext()

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => setIsWishList(true)}
          activeOpacity={0.8}
        >
            <Text style={isWishList ? styles.textOnFocus : styles.textNotFocus}>願望清單</Text>
            <View style={isWishList ? styles.divOnFocus : styles.divNotFocus}/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btn}
          onPress={() => setIsWishList(false)}
          activeOpacity={1}
        >
            <Text style={!isWishList ? styles.textOnFocus : styles.textNotFocus}>購物車</Text>
            <View style={!isWishList ? styles.divOnFocus : styles.divNotFocus}/>

        </TouchableOpacity>
      </View>

        {/* <View style={styles.divider}/> */}
      <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        {isWishList 
        ? wishListProducts.map((product) => 
          <CardCartProduct 
            key={product.name} 
            navigation={navigation}
            src={product.src}
            product={product}
          />)
        : cartProducts.map((product) => 
          <CardCartProduct 
            key={product.name}
            navigation={navigation}
            src={product.src} 
            product={product}
          />)
        }

      </ScrollView>
    </View>
  );
};

export default ShopScreen;