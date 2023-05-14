import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";
import RNBounceable from "@freakycoder/react-native-bounceable";

import { styles } from "./CardCartProduct.style";

interface CardCartProductProps {
  src: any;
  productName: string;
  productPrice: number;
}

const CardCartProduct: React.FC<CardCartProductProps> = ({src, productName, productPrice}) => {
  return (
    <RNBounceable style={styles.container} onPress={() => {}}>
        <View style={styles.imageTextContainer}>
            <Image source={src} style={styles.image}/>

            <View style={styles.textContainer}>
                <Text style={styles.textName}>{ productName }</Text>
                <Text style={styles.textPrice}>${ productPrice }</Text>
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