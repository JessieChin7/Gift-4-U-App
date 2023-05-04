import React from "react";
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./FriendsListScreen.style";
import FriendItem from "./FriendItem";

interface FriendListScreenProps {}

const FriendListScreen: React.FC<FriendListScreenProps> = () => {  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeading}>好友清單</Text>
        <View style={styles.friendListContainer}>
          <FriendItem src={require('../../assets/avatar-anna.png')} username="Anna" />
          <FriendItem src={require('../../assets/avatar-wang.png')} username="Wang" />
          <FriendItem src={require('../../assets/avatar-wood.png')} username="木木" />
          <FriendItem src={require('../../assets/avatar-anna.png')} username="Anna" />
          <FriendItem src={require('../../assets/avatar-wang.png')} username="Wang" />
        </View>
      </ScrollView>
    </View>
  );
};

export default FriendListScreen;