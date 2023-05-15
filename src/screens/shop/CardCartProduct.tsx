import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./CardCartProduct.style";
import { Product } from "../../shared/data/fakeData";

interface CardCartProductProps {
  navigation: any;
  src: any;
  product: Product
}

const CardCartProduct: React.FC<CardCartProductProps> = ({ navigation, src, product }) => {
  return (
    <RNBounceable style={styles.container} onPress={() => navigation.navigate('Product', { productId: product.id })}>
        <View style={styles.imageTextContainer}>
            <Image source={src} style={styles.image}/>

            <View style={styles.textContainer}>
                <Text style={styles.textName}>{ product.name }</Text>
                <Text style={styles.textPrice}>${ product.price }</Text>
                {/* <Image source={require('../../assets/icon-fav-sm.png')} style={styles.icon}/> */}

            </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.textButton}>匯入</Text>
        </TouchableOpacity>
    </RNBounceable>
  );
};

export default CardCartProduct;