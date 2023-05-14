import React from "react";
import { View } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import RNBounceable from "@freakycoder/react-native-bounceable";
import { NavigatorParamList } from "../../navigation/common";
import { styles } from "./CardSearchProduct.style";

interface CardSearchProductProps { }

const CardSearchProduct: React.FC<CardSearchProductProps> = ({ }) => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  return (
    <RNBounceable style={styles.container} onPress={() => { navigation.navigate('Product') }}>
      <Image style={styles.image} source={require('../../assets/products/hanger.png')} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textProductName}> Lorem ipsum dolor </Text>
          <Text style={styles.textProductPrice}> $15.18 </Text>
        </View>
        {/* <Image source={require('../../assets/icon-fav.png')} style={styles.icon} /> */}
      </View>
    </RNBounceable>
  );
};

export default CardSearchProduct;