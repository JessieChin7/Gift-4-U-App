import React, { useState } from "react";
import { View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./LabelItem.style";

interface LabelProps {
    isFocus: boolean;
    setFocusingLabel: (text: string) => void;
    text: string;
}

const Label: React.FC<LabelProps> = ({ isFocus, setFocusingLabel, text }) => {
    // const [isFocus, setIsFocus] = useState(true)

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => setFocusingLabel(text)} style={!isFocus ? styles.btnIsFocus : styles.btnNotFocus}>
                <Text style={!isFocus ? styles.textIsFocus : styles.textNotFocus}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Label;