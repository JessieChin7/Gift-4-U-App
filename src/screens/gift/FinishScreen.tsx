import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './FinishScreen.style';
interface FinishScreenProps {
    navigation: any;
}
const FinishScreen: React.FC<FinishScreenProps> = ({ navigation }) => {

    const handleBackButton = () => {
        navigation.navigate('StickerScreen');
    };


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Finish</Text>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 166, alignSelf: 'center' }}>
                    <Button onPress={handleBackButton} style={styles.backButton}>
                        <Text style={{ color: '#000000' }}>返回</Text>
                    </Button>
                </View>

            </View >
        </>
    );
};

export default FinishScreen;