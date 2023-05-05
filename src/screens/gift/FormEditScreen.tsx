import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { Button } from 'react-native-paper';
import { styles } from './FormEditScreen.style';
import {
    SelectMultipleButton,
    SelectMultipleGroupButton
} from "react-native-selectmultiple-button";
interface FormEditScreenProps {
    navigation: any;
}
const FormEdit: React.FC<FormEditScreenProps> = ({ navigation }) => {
    const [hints, setHints] = useState<string[]>([]);
    const [addiHints, setAddiHints] = useState<string[]>([]);
    const [newHint, setNewHint] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);

    const animalImages = [
        require('../../assets/animal1.png'),
        require('../../assets/animal2.png'),
        require('../../assets/animal3.png'),
        require('../../assets/animal4.png'),
    ];
    const handleNextButton = () => {
        navigation.navigate('FormPreviewScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('GameScreen');
    };
    const handleAnimalSelection = (index: number) => {
        setSelectedAnimal(index);
    };

    const handleHintSelection = (hint: string) => {
        if (!hints.includes(hint)) {
            setHints([...hints, hint]);
        } else {
            setHints(hints.filter(h => h !== hint));
        }
        if (!allHints.includes(hint)) {
            setAddiHints([...addiHints, hint]);
        }
    };

    const handleAddHint = () => {
        if (!hints.includes(newHint) && newHint.trim() !== "") {
            setHints([...hints, newHint]);
            setNewHint('');
            setAddiHints([...addiHints, newHint]);
        }
    };

    const handleDeleteHint = (hint: string) => {
        setHints(hints.filter(h => h !== hint));
    };

    const allHints = ['熱愛爬山', '大學同學', '熱愛吃拉麵', '喜歡聽古典音樂', ...addiHints];

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>選擇送禮動物</Text>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 30, alignSelf: 'center', padding: 59 }}>
                    {animalImages.map((animalImage, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnimalSelection(index)}
                            style={[
                                styles.animalButton,
                                {
                                    borderWidth: selectedAnimal === index ? 2 : 0,
                                    borderRadius: selectedAnimal === index ? 5 : 0,
                                    borderColor: selectedAnimal === index ? 'gray' : 'transparent',
                                },
                            ]}
                        >
                            <Image source={animalImage} style={{ width: 50, height: 50, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    ))}</View>
                <Text style={styles.title}>提供關於自己的提示</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 40, marginHorizontal: 6 }}>
                    {allHints.map((hint, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SelectMultipleButton
                                value={hint}
                                singleTap={() => handleHintSelection(hint)}
                                selected={hints.includes(hint)}
                                buttonViewStyle={{
                                    borderRadius: 50,
                                    height: 32,
                                    backgroundColor: hints.includes(hint) ? '#000000' : '#FFFFFF',
                                    borderTintColor: "transparent",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    paddingHorizontal: 15,
                                    margin: 5
                                }}
                                highLightStyle={{
                                    borderColor: "gray",
                                    backgroundColor: "transparent",
                                    textColor: "gray",
                                    borderTintColor: "gray",
                                    backgroundTintColor: "gray",
                                    textTintColor: "white"
                                }}
                                textStyle={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: hints.includes(hint) ? '#FFFFFF' : '#FFFFFF',
                                }}
                            />
                            {/* {hints.includes(hint) && (
                                <TouchableOpacity onPress={() => handleDeleteHint(hint)}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: -12, marginBottom: 20 }}>×</Text>
                                </TouchableOpacity>
                            )} */}
                        </View>
                    ))}
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginBottom: 29 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>新增：</Text>
                    <TextInput
                        value={newHint}
                        onChangeText={(text) => setNewHint(text)}
                        onSubmitEditing={handleAddHint}
                        placeholder={'任何的提示！'}
                        style={styles.input}
                    />
                </View>
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

export default FormEdit;