import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './StickerScreen.style';
interface StickerScreenProps {
    navigation: any;
}
const StickerScreen: React.FC<StickerScreenProps> = ({ navigation }) => {
    const [selectedSticker, setSelectedSticker] = useState<number | null>(null);

    const handleNextButton = () => {
        navigation.navigate('FinishScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('FormPreviewScreen');
    };

    const handleStickerSelection = (index: number) => {
        setSelectedSticker(index);
    };

    const stickerImages = Array.from({ length: 9 }, (_, i) => '../../assets/sticker${1}.png');

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>選擇送禮通知貼圖</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 40 }}>
                    {stickerImages.map((stickerImage, index) => (
                        <TouchableOpacity key={index} onPress={() => handleStickerSelection(index)} style={{ margin: 5, borderWidth: selectedSticker === index ? 2 : 0, borderColor: '#D9D9D9', borderRadius: 5, borderStyle: 'solid' }}>
                            <Image source={require(`../../assets/sticker3.png`)} style={{ width: 110, height: 110 }} />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 166, alignSelf: 'center' }}>
                    <Button onPress={handleBackButton} style={styles.backButton}>
                        <Text style={{ color: '#000000' }}>返回</Text>
                    </Button>
                    <Button onPress={handleNextButton} style={styles.nextButton}>
                        <Text style={{ color: '#000000' }}>送出</Text>
                    </Button>
                </View>
            </View >
        </>
    );
};

export default StickerScreen;
