import { View, Image, ImageBackground, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './IntroScreen.style';
interface IntroScreenProps {
    navigation: any;
}
const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
    const [currentDot, setCurrentDot] = useState(0);
    const totalDots = 7;
    const backgroundImages = [
        require('../../assets/background1.png'),
        require('../../assets/background2.png'),
        require('../../assets/background1.png'),
        require('../../assets/background2.png'),
        require('../../assets/background2.png'),
        require('../../assets/background2.png'),
        require('../../assets/background2.png'),
    ];

    const handleNextButton = () => {
        if (currentDot < totalDots - 1) {
            setCurrentDot(currentDot + 1);
        } else {
            navigation.navigate('FriendSelection');
        }
    };

    return (
        <>
            <ImageBackground
                source={backgroundImages[currentDot % backgroundImages.length]}
                style={styles.container}
                resizeMode="cover"
            >
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', top: 700 }}>
                    <Button onPress={handleNextButton} style={styles.nextButton}>
                        <Text style={{ color: '#FFFFFF' }}>下一步</Text>
                    </Button>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', top: 680 }}>
                    {[...Array(totalDots)].map((_, index) => (
                        <View
                            key={index}
                            style={{
                                width: 7.75,
                                height: 6.89,
                                marginLeft: index === 0 ? 0 : 10,
                                borderRadius: 50,
                                backgroundColor: index === currentDot ? '#000000' : '#D9D9D9',
                            }}
                        />
                    ))}
                </View>

            </ImageBackground >
        </>
    );
};

export default IntroScreen;
