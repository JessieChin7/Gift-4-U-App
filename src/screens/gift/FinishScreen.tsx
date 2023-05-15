import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './FinishScreen.style';
import { useAppContext } from '../../context/AppContext';
interface FinishScreenProps {
    navigation: any;
}

interface Message {
    id: number;
    content: string | null;
    sticker: number | null;
    sender: 'self' | 'other' | 'gameResult';
}

const FinishScreen: React.FC<FinishScreenProps> = ({ navigation }) => {
    const { selectedSticker, selectedAnimal, checkedItems, checkeRItems, checkedPItems, showMingChatRoom, setShowMingChatRoom, username } = useAppContext();
    const animalNames = [
        "海獺",
        "河馬",
        "袋鼠",
    ];
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            content: selectedAnimal !== null ? `你收到來自${animalNames[selectedAnimal]}的收禮邀約` : "",
            sticker: null,
            sender: "self",
        },
        { id: 1, content: null, sticker: selectedSticker, sender: 'self' },
        { id: 2, content: '點擊此訊息查看', sticker: null, sender: 'self' },
    ]);
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef<FlatList>(null);

    // every time messages changes, scroll to the end of the list
    useEffect(() => {
        setTimeout(() => {
            if (flatListRef.current) {
                flatListRef.current.scrollToEnd({ animated: false });
            }
        }, 100);  // Delay of 100ms
    }, [messages]);

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

    const handleBackButton = () => {
        setShowMingChatRoom(true);
        navigation.push('ChatRoomScreen');
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length, content: inputText, sticker: null, sender: 'self' }]);
            setInputText('');
        }
    };

    const handleButtonClick = (response: 'correct' | 'wrong') => {
        setMessages([...messages, { id: messages.length, content: '點擊查看結果！', sticker: null, sender: 'self' }]);
    };

    useEffect(() => {

        const gameResultTimer = setTimeout(() => {
            const randomRItem = checkeRItems[Math.floor(Math.random() * checkeRItems.length)];
            const randomPItem = checkedPItems[Math.floor(Math.random() * checkedPItems.length)];
            let content = ``;
            if (checkedItems.length === 1 && checkedItems[0].id === 4) {
                setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length, content: `\n*我想要*\n帽踢、不要吃的`, sticker: null, sender: "gameResult" }]);
                return;
            }
            content += `*遊戲結果*\n`;
            for (const item of checkedItems) {
                if (item.id === 1) {
                    content += `價格：\n100-300元\n`;
                } else if (item.id === 2 && selectedAnimal != null) {
                    if (randomRItem.id === 1) {
                        content += `收禮方式：\n${animalNames[selectedAnimal]}會親自送禮給你\n`;
                    }
                    else if (randomRItem.id === 2) {
                        content += `收禮方式：\n${animalNames[selectedAnimal]}會請親自你去找他拿驚喜禮物\n`;
                    }
                    else if (randomRItem.id === 3) {
                        content += `收禮方式：\n${animalNames[selectedAnimal]}會透過神秘朋友將禮物送給你\n`;
                    }
                } else if (item.id === 3 && selectedAnimal != null) {
                    if (randomPItem.id === 1) {
                        content += `包裝方式：\n${animalNames[selectedAnimal]}會以精緻的方式包裝禮物給你\n`;
                    }
                    else if (randomPItem.id === 2) {
                        content += `包裝方式：\n${animalNames[selectedAnimal]}會以隨便的方式包裝禮物給你\n`;
                    }
                    else if (randomPItem.id === 3) {
                        content += `包裝方式：\n${animalNames[selectedAnimal]}會以不包裝形式送禮物給你\n`;
                    }
                } else if (item.id === 4) {
                    continue;
                }
            }
            content += `\n*我想要*\n帽踢、不要吃的`;
            setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length, content: content, sticker: null, sender: 'gameResult' }]);
        }, 3000);
        const guessTimer = setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length, content: `我猜你是${username}`, sticker: null, sender: 'other' }]);
        }, 4000);
        return () => {
            clearTimeout(gameResultTimer);
            clearTimeout(guessTimer);
        };
    }, []);

    return (
        <>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            >
                <View style={[styles.header, styles.separator]}>
                    <Button onPress={handleBackButton} style={styles.backButton}>
                        <Text style={{ color: '#000000', fontSize: 24 }}>{'<'}</Text>
                    </Button>
                    <Image
                        source={require('../../assets/little-ming.png')}
                        style={styles.friendAvatar}
                    />
                    <Text style={styles.friendName}>阿明</Text>
                </View>

                <FlatList
                    data={messages}
                    ref={flatListRef}
                    renderItem={({ item, index }) => (
                        <View>
                            {item.sender !== "self" && (index === 0 || messages[index - 1].sender === "self") && (
                                <View style={styles.otherInfo}>
                                    <Image
                                        source={require("../../assets/little-ming.png")}
                                        style={styles.friendAvatarSmall}
                                    />
                                    <Text style={styles.friendNameSmall}>阿明</Text>
                                </View>
                            )}
                            <View
                                style={[
                                    styles.messageContainer,
                                    item.sender === "self" ? styles.selfMessage : item.sender === "other" ? styles.otherMessage : styles.gameResultMessage,
                                ]}
                            >
                                {item.sticker !== null && (
                                    <Image
                                        source={stickerImages[item.sticker as number]}
                                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                                    />
                                )}
                                {
                                    item.content &&
                                    (
                                        (item.sender === "self" && item.content === '點擊此訊息查看') ?
                                            <Button onPress={() => {
                                                Alert.alert('此訊息僅限於收禮者查看');
                                            }}>
                                                <Text style={[styles.message, { fontWeight: 'bold', fontSize: 16, color: '#000000', padding: 0, margin: 0 }]}> {item.content}</Text>
                                            </Button>
                                            :
                                            (item.sender === "self" && item.content === '點擊查看結果！') ?
                                                <Button onPress={() => {
                                                    Alert.alert('此訊息僅限於收禮者查看');
                                                }}>
                                                    <Text style={[styles.message, { fontWeight: 'bold', fontSize: 16, color: '#000000', padding: 0, margin: 0 }]}> {item.content}</Text>
                                                </Button>
                                                :
                                                (item.sender === "gameResult") ?
                                                    item.content.split('\n').map((text: string, i: number) => {
                                                        if (text.startsWith('*') && text.endsWith('*')) {
                                                            return (
                                                                <Text key={i} style={[styles.message, styles.boldYellow]}>
                                                                    {text.slice(1, -1)}
                                                                </Text>
                                                            );
                                                        } else if (text === "帽踢、不要吃的") {
                                                            return (
                                                                <View key={i} style={[, styles.whiteBackground]} >
                                                                    <Text style={[styles.message, { fontWeight: 'bold' }]}>{text}</Text>
                                                                </View>
                                                            );
                                                        } else {
                                                            return (
                                                                <Text key={i} style={[styles.message, { fontWeight: 'bold' }]}>
                                                                    {text}
                                                                </Text>
                                                            );
                                                        }
                                                    })
                                                    :
                                                    <Text style={styles.message}>{item.content}</Text>
                                    )
                                }

                                {item.content === `我猜你是${username}` && (
                                    <View style={styles.buttonContainer}>
                                        <Button onPress={() => handleButtonClick('correct')} style={[styles.button, { backgroundColor: '#38B269', alignSelf: 'center' }]} > <Text style={{ color: '#FFFFFF' }}>正確</Text></Button>
                                        <Button onPress={() => handleButtonClick('wrong')} style={[styles.button, { backgroundColor: '#C53939', alignSelf: 'center' }]} ><Text style={{ color: '#FFFFFF' }}>錯誤</Text></Button>
                                    </View>
                                )}
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => setInputText(text)}
                        value={inputText}
                        placeholder="Type a message"
                    />
                    <Button onPress={handleSendMessage} style={styles.sendButton}>
                        <Text style={{ color: '#000000' }}>Send</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default FinishScreen;
