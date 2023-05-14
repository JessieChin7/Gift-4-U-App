import React from "react";
import { View } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import Button from "../../components/Button";
import { styles } from "./WelcomeShared.style";

interface WelcomeFourthProps {}

const WelcomeFourth: React.FC<WelcomeFourthProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/welcome-img-4.png')}  style={{ width: 254, height: 296 }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>開啟你的禮物旅程吧!</Text>
      </View>

      <Button label="立即登入/註冊" onPress={() => {navigation.navigate('Login')}}/>

      <View style={styles.dotsContainer}>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotBlack}/>
      </View>
    </View>
  );
};

export default WelcomeFourth;