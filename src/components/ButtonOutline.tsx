import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./ButtonOutline.style";

interface ButtonOutlineProps {
    label: string;
    onPress: any; // React.MouseEvent<HTMLElement>
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({ label, onPress }) => {
  return (
    <View>    
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.textButton}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOutline;