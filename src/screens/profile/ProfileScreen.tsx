import React from "react";
import { View } from 'react-native';
import { Text, Image } from "react-native-elements";
import Button from "../../components/Button";
import ButtonOutline from "../../components/ButtonOutline";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import { styles } from "./ProfileScreen.style";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  const accessPage = () => navigation.navigate('Setting')
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/avatar-scrat.png')}  style={styles.avatar} />
      <Text style={styles.textName}>JANE</Text>

      <View style={styles.buttonsContainer}>
        <Button label="關於我" onPress={() => {navigation.navigate('About')}}/>
        <ButtonOutline label="好友清單" onPress={() => {navigation.navigate('Friends_List')}}/>
        <ButtonOutline label="送禮與收禮紀錄" onPress={() => {navigation.navigate('History')}}/>
        <ButtonOutline label="設定" onPress={() => {accessPage()}}/>
        {/* <ButtonOutline label="邀請好友" onPress={() => {}}/> */}
      </View>
    </View>
  );
};

export default ProfileScreen;