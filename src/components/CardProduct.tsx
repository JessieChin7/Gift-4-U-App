import React from "react";
import { View } from 'react-native';
import { Image, Text } from "react-native-elements";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./CardProduct.style";

interface CardProductProps {
  navigation: any;
  src: any;
  productName: string;
  productPrice: number;
  onPress: () => {};
}

const CardProduct: React.FC<CardProductProps> = ({navigation, src, productName, productPrice, onPress }) => {
  return (
    <RNBounceable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={src}/>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textProductName}>{productName}</Text>
          <Text style={styles.textProductPrice}>${productPrice}</Text>
        </View>
        {/* <Image source={require('../../assets/icon-fav.png')} style={styles.icon}/> */}
      </View>
    </RNBounceable>
  );
};

export default CardProduct;