import React from "react";
import { View, TextInput } from 'react-native';

import { styles } from "./TextInputCustomed.style";

interface TextInputCustomedProps {
    placeholder: string;
    defaultValue: string;
    onChangeText: any; // React.MouseEvent<HTMLElement>
    isPassword: boolean;
}

const TextInputCustomed: React.FC<TextInputCustomedProps> = ({ placeholder, defaultValue, onChangeText, isPassword }) => {
  return (
    <>
    {!isPassword ?
        <View style={styles.container}>    
            <TextInput
            style={styles.text}
            placeholder={placeholder}
            placeholderTextColor="#8391a1"
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            />
        </View>
    :         
        <View style={styles.container}>    
            <TextInput
            style={styles.text}
            placeholder={placeholder}
            placeholderTextColor="#8391a1"
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            secureTextEntry // password input
            />
        </View>
    }
    </>
  );
};

export default TextInputCustomed;