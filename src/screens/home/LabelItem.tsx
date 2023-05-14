import React, { useState } from "react";
import { View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-elements";

import { styles } from "./LabelItem.style";

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    const [isFocus, setIsFocus] = useState(true)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsFocus(!isFocus)} style={isFocus ? styles.btnIsFocus : styles.btnNotFocus}>
                <Text style={isFocus ? styles.textIsFocus : styles.textNotFocus}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Label;