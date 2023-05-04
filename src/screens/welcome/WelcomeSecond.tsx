import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import Button from "../../components/Button";
import { styles } from "./WelcomeShared.style";

interface WelcomeSecondProps {}

const WelcomeSecond: React.FC<WelcomeSecondProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/welcome-img-2.png')}  style={{ width: 199, height: 246 }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>安心了解對方的需求</Text>
        <Text style={styles.textDetail}>透過虛擬動物角色以及互動小遊戲{"\n"}匿名了解對方究竟想要什麼禮物！</Text>
      </View>

      <Button label="下一步" onPress={() => {navigation.navigate('Welcome_Third')}}/>

      <View style={styles.dotsContainer}>
        <View style={styles.dotGray}/>
        <View style={styles.dotBlack}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
      </View>
    </View>
  );
};

export default WelcomeSecond;