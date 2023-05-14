import React from "react";
import { ScrollView, View } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./FriendsListScreen.style";
import FriendItem from "./FriendItem";

interface FriendListScreenProps {}

const FriendListScreen: React.FC<FriendListScreenProps> = () => {  
  const friendsData = [
    {
      avatar: require('../../assets/little-ming.png'),
      username: "小明"
    },
    {
      avatar: require('../../assets/medium-ming.png'),
      username: "中明"
    },
    {
      avatar: require('../../assets/big-ming.png'),
      username: "大明"
    }
  ]
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeading}>好友清單</Text>
        <View style={styles.friendListContainer}>
          {friendsData.map(friend => (
            <FriendItem 
              key={friend.username}
              src={friend.avatar} 
              username={friend.username} 
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FriendListScreen;