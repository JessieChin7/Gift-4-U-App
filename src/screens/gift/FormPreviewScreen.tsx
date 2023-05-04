import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './FormPreviewScreen.style';
interface FormPreviewScreenProps {
    navigation: any;
}
const FormPreview: React.FC<FormPreviewScreenProps> = ({ navigation }) => {

    const handleNextButton = () => {
        navigation.navigate('StickerScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('FormEditScreen');
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>表單預覽</Text>
                <Image source={require('../../assets/FormPreview.png')} style={{ alignSelf: 'center', marginVertical: 40 }} />
                <View style={{ display: 'flex', flexDirection: 'row', gap: 166, alignSelf: 'center' }}>
                    <Button onPress={handleBackButton} style={styles.backButton}>
                        <Text style={{ color: '#000000' }}>返回</Text>
                    </Button>
                    <Button onPress={handleNextButton} style={styles.nextButton}>
                        <Text style={{ color: '#000000' }}>下一步</Text>
                    </Button>
                </View>

            </View >
        </>
    );
};

export default FormPreview;