import React from "react";
import { View } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import Button from "../../components/Button";

import { styles } from "./WelcomeShared.style";

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/welcome-img-1.png')}  style={{ width: 239, height: 226 }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>還在為要送朋友什麼禮物煩惱嗎</Text>
        <Text style={styles.textDetail}>全新獨創AI智能化搜尋功能{"\n"}幫你找到適合的禮物</Text>
      </View>

      <Button label="下一步" onPress={() => {navigation.navigate('Welcome_Second')}}/>

      <View style={styles.dotsContainer}>
        <View style={styles.dotBlack}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
      </View>
    </View>

  );
};

export default WelcomeScreen;