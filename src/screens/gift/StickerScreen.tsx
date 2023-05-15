import { View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './StickerScreen.style';
import { useAppContext } from '../../context/AppContext';
interface StickerScreenProps {
    navigation: any;
}
const StickerScreen: React.FC<StickerScreenProps> = ({ navigation }) => {
    // const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
    const { selectedSticker, setSelectedSticker } = useAppContext();

    const handleNextButton = () => {
        // 如果沒有選擇貼圖，就跳出警告
        if (selectedSticker === null) {
            Alert.alert("請選擇送禮貼圖");
            return;
        }

        navigation.navigate('FinishScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('FormEditScreen');
    };

    const handleStickerSelection = (index: number) => {
        setSelectedSticker(index);
    };

    const stickerImages = [
        require('../../assets/sticker1.png'),
        require('../../assets/sticker2.png'),
        require('../../assets/sticker3.png'),
        require('../../assets/sticker4.png'),
        require('../../assets/sticker5.png'),
        require('../../assets/sticker6.png'),
        require('../../assets/sticker7.png'),
        require('../../assets/sticker8.png'),
        require('../../assets/sticker9.png'),
    ];

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>選擇送禮通知貼圖</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 40 }}>
                    {stickerImages.map((stickerImage, index) => (
                        <TouchableOpacity key={index} onPress={() => handleStickerSelection(index)} style={{ margin: 2, padding: 4, borderWidth: selectedSticker === index ? 2 : 0, borderColor: 'gray', borderRadius: 5, borderStyle: 'solid' }}>
                            <Image source={stickerImage} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
