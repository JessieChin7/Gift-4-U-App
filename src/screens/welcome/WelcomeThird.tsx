import React from "react";
import { View } from 'react-native';
import { Image, Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import Button from "../../components/Button";
import { styles } from "./WelcomeShared.style";

interface WelcomeThirdProps {}

const WelcomeThird: React.FC<WelcomeThirdProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/welcome-img-3.png')}  style={{ width: 254, height: 276 }} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>送禮回憶錄！</Text>
        <Text style={styles.textDetail}>透過查看送/收禮紀錄，回顧彼此的紀念日！{"\n"}</Text>
      </View>

      <Button label="下一步" onPress={() => {navigation.navigate('Welcome_Fourth')}}/>

      <View style={styles.dotsContainer}>
        <View style={styles.dotGray}/>
        <View style={styles.dotGray}/>
        <View style={styles.dotBlack}/>
        <View style={styles.dotGray}/>
      </View>
    </View>
  );
};

export default WelcomeThird;