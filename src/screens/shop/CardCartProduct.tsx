import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./CardCartProduct.style";

interface CardCartProductProps {}

const CardCartProduct: React.FC<CardCartProductProps> = ({}) => {
  return (
    <RNBounceable style={styles.container} onPress={() => {}}>
        <View style={styles.imageTextContainer}>
            <Image source={require('../../assets/product-hanger.png')} style={styles.image}/>

            <View style={styles.textContainer}>
                <Text style={styles.textName}>Lorem</Text>
                <Text style={styles.textPrice}>$225.00</Text>
                <Text>Size: US 7</Text>
                <Image source={require('../../assets/icon-fav-sm.png')} style={styles.icon}/>

            </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.textButton}>匯入</Text>
        </TouchableOpacity>
    </RNBounceable>
  );
};

export default CardCartProduct;