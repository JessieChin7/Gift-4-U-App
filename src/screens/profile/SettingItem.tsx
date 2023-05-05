import React from "react";
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./SettingItem.style";

interface SettingItemProps {
    icon: any;
    label: string;
    onPress: any; // React.MouseEvent<HTMLElement>
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, label, onPress }) => {
  return (
    <View>    
        <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
            <View style={styles.leftContainer}>
                <Image source={icon} style={styles.icon}/>
                <Text style={styles.text}>{label}</Text>
            </View>
            <Image source={require('../../assets/icon-arrowright.png')} style={styles.icon}/>
        </TouchableOpacity>
    </View>
  );
};

export default SettingItem;