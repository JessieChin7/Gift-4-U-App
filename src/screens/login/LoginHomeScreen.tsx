import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import Button from "../../components/Button";
import { styles } from "./LoginHomeScreen.style";
import ButtonOutline from "../../components/ButtonOutline";

interface LoginHomeScreenProps {}

const LoginHomeScreen: React.FC<LoginHomeScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/avatar-scrat.png')}  style={styles.image} />
      <Text style={styles.text}>Gift 4 u</Text>


      <Button label="登入" onPress={() => {navigation.navigate('Login')}} />
      <ButtonOutline label="註冊" onPress={() => {navigation.navigate('Register')}} />

      <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
        <Text style={styles.textButton}>忘記密碼？</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginHomeScreen;