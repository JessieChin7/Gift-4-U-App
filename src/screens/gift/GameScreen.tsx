import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from 'react-native';
import { Text } from "react-native-elements";
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-paper';
import { styles } from './GameScreen.style';
import * as Haptics from 'expo-haptics';
import { useAppContext } from '../../context/AppContext';
interface Item {
    id: number;
    title: string;
}
interface GameScreenProps {
    navigation: any;
}


const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => {
    const {
        checkedItems,
        setCheckedItems,
        checkeRItems,
        setCheckedRItems,
        checkedPItems,
        setCheckedPItems,
    } = useAppContext();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<any>(null);
    const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
    const [priceRangeStart, setPriceRangeStart] = useState<any>();
    const [priceRangeEnd, setPriceRangeEnd] = useState<any>();
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
        { id: 3, title: '會透過朋友轉交給他' },
    ];
    const detailPackItem: Item[] = [
        { id: 1, title: '我會精緻包裝' },
        { id: 2, title: '我會隨便包裝' },
        { id: 3, title: '我不會包裝' },
    ];

    // update state in toggleChecked function
    const toggleChecked = (item: { id: number, title: string }) => {
        const id = item.id;
        if (checkedItems.some(checkedItem => checkedItem.id === id)) {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem.id !== id));
            setExpandedItems({ ...expandedItems, [id]: false });
        } else {
            setCheckedItems([...checkedItems, item]);
            setExpandedItems({ ...expandedItems, [id]: true });
        }
    };

    const toggleRChecked = (item: { id: number, title: string }) => {
        const id = item.id;
        if (checkeRItems.some(checkeRItem => checkeRItem.id === id)) {
            setCheckedRItems(checkeRItems.filter((checkeRItem) => checkeRItem.id !== id));
        } else {
            setCheckedRItems([...checkeRItems, item]);
        }
    };

    const togglePChecked = (item: { id: number, title: string }) => {
        const id = item.id;
        if (checkedPItems.some(checkedPItem => checkedPItem.id === id)) {
            setCheckedPItems(checkedPItems.filter((checkedPItem) => checkedPItem.id !== id));
        } else {
            setCheckedPItems([...checkedPItems, item]);
        }
    };

    const handleNextButton = () => {
        // 在checkitem（四種遊戲中）至少要選擇一種
        if (checkedItems.length === 0) {
            Alert.alert("請至少選擇一種遊戲");
            return;
        }
        // 如果有選擇收禮方式或包裝方式，都至少要選擇一項 expand item
        if ((checkedItems.some(item => item.id === 2) && checkeRItems.length === 0) ||
            (checkedItems.some(item => item.id === 3) && checkedPItems.length === 0)) {
            Alert.alert("如果選擇收禮方式抽抽抽或包裝方式抽抽抽，請至少選擇一種細節選項");
            return;
        }
        // 如果有價格的抽抽抽遊戲，價格區間的兩個input一定要填東西
        if (checkedItems.some(item => item.id === 1) && (!priceRangeStart || !priceRangeEnd)) {
            Alert.alert("如果選擇價格命運抽抽抽遊戲，請輸入價格區間");
            return;
        }
        navigation.navigate('FormEditScreen');
    };
    const handleBackButton = () => {
        navigation.navigate('FriendSelection');
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>選擇送禮遊戲</Text>
                </View>
                <View style={styles.scrollViewContainer}>
                    <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>
                        {items.map((gameItem) => (
                            <React.Fragment key={gameItem.id}>
                                <View key={gameItem.id} style={styles.checkBoxContainer}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
                                        <Checkbox
                                            style={styles.radioButton}
                                            value={checkedItems.some(item => item.id === gameItem.id)}
                                            onValueChange={() => toggleChecked(gameItem)}
                                            color={checkedItems.some(item => item.id === gameItem.id) ? '#667080' : '#667080'}
                                        />
                                        <Text style={styles.checkBoxTitle}>{gameItem.title}</Text>
                                        <TouchableOpacity
                                            style={styles.previewButton}
                                            activeOpacity={1}
                                            onLongPress={() => onPreviewButtonLongPress(itemImages[gameItem.id])}
                                            onPressOut={onPreviewButtonRelease}
                                        >
                                            <Text style={{ color: "#FFFFFF", fontSize: 12, fontWeight: "bold" }}>
                                                預覽
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View >
                                {
                                    gameItem.id === 1 && expandedItems[gameItem.id] && (
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                                請輸入價格區間（NTD$）：
                                            </Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 32 }}>
                                                <TextInput
                                                    style={styles.input}
                                                    value={priceRangeStart}
                                                    onChangeText={text => setPriceRangeStart(text)}
                                                />
                                                <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", textAlignVertical: "center", paddingBottom: 13 }}>
                                                    ~
                                                </Text>
                                                <TextInput
                                                    style={styles.input}
                                                    value={priceRangeEnd}
                                                    onChangeText={text => setPriceRangeEnd(text)}
                                                />
                                            </View>
                                        </View>
                                    )
                                }
                                {
                                    gameItem.id === 2 && expandedItems[gameItem.id] && (

                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                                請選擇最少一種收禮方式：
                                            </Text>
                                            {detailReceiveItem.map((Ritem) => (
                                                <TouchableOpacity
                                                    key={Ritem.id}
                                                    style={[
                                                        styles.detailBoxContainer,
                                                        {
                                                            borderWidth: checkeRItems.some(item => item.id === Ritem.id) ? 1 : 0,
                                                            borderColor: checkeRItems.some(item => item.id === Ritem.id) ? '#667080' : 'transparent',
                                                        },
                                                    ]}
                                                    onPress={() => toggleRChecked(Ritem)}
                                                >
                                                    <Text style={styles.detailBoxTitle}>{Ritem.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )
                                }
                                {
                                    gameItem.id === 3 && expandedItems[gameItem.id] && (
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold", textAlign: "center", paddingBottom: 13 }}>
                                                請選擇最少一種包裝方式：
                                            </Text>
                                            {detailPackItem.map((Pitem) => (
                                                <TouchableOpacity
                                                    key={Pitem.id}
                                                    style={[
                                                        styles.detailBoxContainer,
                                                        {
                                                            borderWidth: checkedPItems.some(item => item.id === Pitem.id) ? 1 : 0,
                                                            borderColor: checkedPItems.some(item => item.id === Pitem.id) ? '#667080' : 'transparent',
                                                        },
                                                    ]}
                                                    onPress={() => togglePChecked(Pitem)}
                                                >
                                                    <Text style={styles.detailBoxTitle}>{Pitem.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    )
                                }

                            </React.Fragment>
                        ))
                        }
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Button onPress={handleBackButton} style={styles.backButton}>
                                <Text style={{ color: '#000000' }}>返回</Text>
                            </Button>
                            <Button onPress={handleNextButton} style={styles.nextButton}>
                                <Text style={{ color: '#000000' }}>下一步</Text>
                            </Button>
                        </View>
                    </ScrollView >
                </View >
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