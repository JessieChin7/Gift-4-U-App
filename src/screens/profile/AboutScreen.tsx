import React from "react";
import { View } from 'react-native';
import { Text, Image } from "react-native-elements";

import { styles } from "./AboutScreen.style";

interface AboutScreenProps {}

const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/avatar-scrat.png')}  style={styles.avatar} />

      <Text style={styles.textUsername}>JANE</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>關於我：</Text>
        <Text style={styles.textContent}>興趣：</Text>
        <Text style={styles.textContent}>留言：不要送我馬克杯</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>生日：</Text>
          <Text style={styles.textContentRow}>2002.01.01(摩羯座)</Text>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;