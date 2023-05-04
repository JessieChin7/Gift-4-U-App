import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
// import Modal from 'react-native-modal';
import { Text } from "react-native-elements";
import { CheckBox, Input } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { styles } from './GameScreen.style';
import * as Haptics from 'expo-haptics';
import { ScrollView } from 'react-native';

interface Item {
    id: number;
    title: string;
}
interface GameScreenProps {
    navigation: any;
}


const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const [checkeRItems, setCheckedRItems] = useState<number[]>([]);
    const [checkedPItems, setCheckedPItems] = useState<number[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<any>(null);
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

    const onPreviewButtonLongPress = (imageURL: string) => {
        // console.log('onPreviewButtonLongPress');
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        // Vibration.vibrate(0.5);
        setModalImage(imageURL);
        setModalVisible(true);
    };

    const onPreviewButtonRelease = () => {
        setModalVisible(false);
    };


    const itemImages: Record<number, string> = {
        1: require('../../assets/PriceGame.png'),
        2: require('../../assets/ReceiveGame.png'),
        3: require('../../assets/PackGame.png'),
        4: require('../../assets/ClueGame.png'),
    };
    const items: Item[] = [
        { id: 1, title: '價格命運抽抽抽' },
        { id: 2, title: '收禮方式抽抽抽' },
        { id: 3, title: '包裝方式抽抽抽' },
        { id: 4, title: '送禮者線索數量' },
    ];
    const detailReceiveItem: Item[] = [
        { id: 1, title: '我會親自拿給他' },
        { id: 2, title: '他需要來跟我拿' },
        { id: 3, title: '會透過朋友轉交給它' },
    ];
    const detailPackItem: Item[] = [
        { id: 1, title: '我會精緻包裝' },
        { id: 2, title: '我會隨便包裝' },
        { id: 3, title: '我不會包裝' },
    ];

    // update state in toggleChecked function
    const toggleChecked = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id));
            setExpandedItems({ ...expandedItems, [id]: false });
        } else {
            setCheckedItems([...checkedItems, id]);
            setExpandedItems({ ...expandedItems, [id]: true });
        }
    };

    const toggleRChecked = (id: number) => {
        if (checkeRItems.includes(id)) {
            setCheckedRItems(checkeRItems.filter((item) => item !== id));
        } else {
            setCheckedRItems([...checkeRItems, id]);
        }
    };

    const togglePChecked = (id: number) => {
        if (checkedPItems.includes(id)) {
            setCheckedPItems(checkedPItems.filter((item) => item !== id));
        } else {
            setCheckedPItems([...checkedPItems, id]);
        }
    };
    const handleNextButton = () => {
        navigation.navigate('FormEditScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('FriendSelection');
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>選擇送禮遊戲</Text>
                <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <>
                            <View key={item.id} style={styles.checkBoxContainer}>
                                <CheckBox
                                    uncheckedIcon="circle-o"
                                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                    textStyle={styles.checkBoxTitle}
                                    style={styles.checkButton}
                                    title={item.title}
                                    checked={checkedItems.includes(item.id)}
                                    onPress={() => toggleChecked(item.id)}
                                />

                                <TouchableOpacity
                                    style={styles.previewButton}
                                    activeOpacity={1}
                                    onLongPress={() => onPreviewButtonLongPress(itemImages[item.id])}
                                    onPressOut={onPreviewButtonRelease}
                                >
                                    <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "bold" }}>
                                        預覽
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {item.id === 1 && expandedItems[item.id] && (
                                <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                    請輸入價格區間（NTD$）：
                                </Text>
                            )}
                            {item.id === 2 && expandedItems[item.id] && (
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                        請選擇最少一種收禮方式：
                                    </Text>
                                    {detailReceiveItem.map((Ritem) => (
                                        <Button key={Ritem.id} style={styles.detailBoxContainer}>
                                            <CheckBox
                                                uncheckedIcon="circle-o"
                                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                                textStyle={styles.detailBoxTitle}
                                                style={styles.detailItem}
                                                title={Ritem.title}
                                                checked={checkeRItems.includes(Ritem.id)}
                                                onPress={() => toggleRChecked(Ritem.id)}
                                            />
                                        </Button>
                                    ))}
                                </View>
                            )}
                            {item.id === 3 && expandedItems[item.id] && (
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                        請選擇最少一種包裝方式：
                                    </Text>
                                    {detailPackItem.map((Pitem) => (
                                        <Button key={Pitem.id} style={styles.detailBoxContainer}>
                                            <CheckBox
                                                uncheckedIcon="circle-o"
                                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                                textStyle={styles.detailBoxTitle}
                                                style={styles.detailItem}
                                                title={Pitem.title}
                                                checked={checkedPItems.includes(Pitem.id)}
                                                onPress={() => togglePChecked(Pitem.id)}
                                            />
                                        </Button>
                                    ))}
                                </View>


                            )}
                        </>
                    ))
                    }
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 166 }}>
                        <Button onPress={handleBackButton} style={styles.backButton}>
                            <Text style={{ color: '#000000' }}>返回</Text>
                        </Button>
                        <Button onPress={handleNextButton} style={styles.nextButton}>
                            <Text style={{ color: '#000000' }}>下一步</Text>
                        </Button>
                    </View>
                </ScrollView >
            </View >

            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay} >
                    {modalImage && <Image source={modalImage} style={styles.modalImage} />}
                </View>
            </Modal >

        </>
    );
};

export default GameScreen;