import React from "react";
import { ScrollView, View } from 'react-native';
import { Text, Image } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import { styles } from "./FriendListScreen.style";
import FriendItem from "./FriendItem";

interface FriendListScreenProps {}

const FriendListScreen: React.FC<FriendListScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeading}>好友清單</Text>
        <View style={styles.friendListContainer}>
          <View style={styles.friendContainer}>
            <Image source={require('../../assets/product-hanger.png')} style={styles.image}/>
            <Text style={styles.text}>Anna</Text>
          </View>
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Wang" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="木木" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Wang" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="木木" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Wang" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="木木" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Wang" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="木木" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Anna" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="Wang" />
          <FriendItem src={require('../../assets/product-hanger.png')} username="木木" />
        </View>
      </ScrollView>
    </View>
  );
};

export default FriendListScreen;