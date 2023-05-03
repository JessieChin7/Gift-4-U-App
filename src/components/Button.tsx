import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./Button.style";

interface ButtonProps {
    label: string;
    onPress: any; // React.MouseEvent<HTMLElement>
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <View>    
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.textButton}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;