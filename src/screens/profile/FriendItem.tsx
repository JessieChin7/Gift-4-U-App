import React from "react";
import { TouchableOpacity } from 'react-native';
import { Text, Image } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { NavigatorParamList } from "../../navigation/common";
import { styles } from "./FriendItem.style";

interface FriendItemProps {
    src: any;
    username: string;
}

const FriendItem: React.FC<FriendItemProps> = ({ src, username }) => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Friend_Detail")}>
        <Image source={src} style={styles.image}/>
        <Text style={styles.text}>{username}</Text>
    </TouchableOpacity>
  );
};

export default FriendItem;