import React from "react";
import { View } from 'react-native';
import { Text, Image } from "react-native-elements";
import { styles } from "./FriendDetailScreen.style";

interface FriendDetailScreenProps {}

const FriendDetailScreen: React.FC<FriendDetailScreenProps> = () => {
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/medium-ming.png')}  style={styles.avatar} />
      <Text style={styles.textName}>中明</Text>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>關於他：</Text>
        <Text style={styles.textContent}>興趣：</Text>
        <Text style={styles.textContent}>留言：我超愛泰迪熊的，送我泰迪熊</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>生日：</Text>
          <Text style={styles.textContentRow}>2002.06.14 (雙子座)</Text>
        </View>
      </View>
    </View>
  );
};

export default FriendDetailScreen;