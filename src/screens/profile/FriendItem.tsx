import React from "react";
import { View } from 'react-native';
import { Text, Image } from "react-native-elements";

import { styles } from "./FriendItem.style";

interface FriendItemProps {
    src: any;
    username: string;
}

const FriendItem: React.FC<FriendItemProps> = ({ src, username }) => {
  
  return (
    <View style={styles.container}>
        <Image source={src} style={styles.image}/>
        <Text style={styles.text}>{username}</Text>
    </View>
  );
};

export default FriendItem;