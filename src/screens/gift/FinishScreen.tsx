import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image
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
    sender: 'self' | 'other';
}

const FinishScreen: React.FC<FinishScreenProps> = ({ navigation }) => {
    const { selectedSticker } = useAppContext();
    const { selectedAnimal } = useAppContext();
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
    const animalMessages = [
        "你收到來自海獺的收禮邀約！",
        "你收到來自河馬的收禮邀約！",
        "你收到來自袋鼠的收禮邀約！",
    ];

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            content: selectedAnimal !== null ? animalMessages[selectedAnimal] : "",
            sticker: null,
            sender: "self",
        },
        { id: 1, content: null, sticker: selectedSticker, sender: 'self' },
        { id: 2, content: '點擊此訊息查看', sticker: null, sender: 'self' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleBackButton = () => {
        navigation.navigate('StickerScreen');
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length, content: inputText, sticker: null, sender: 'self' }]);
            setInputText('');
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessages([
                ...messages,
                { id: messages.length, content: '我猜你是小王', sticker: null, sender: 'other' },
            ]);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <View style={styles.container}>
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
                    renderItem={({ item, index }) => (
                        <View>
                            {item.sender === "other" && (index === 0 || messages[index - 1].sender === "self") && (
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
                                    item.sender === "self" ? styles.selfMessage : styles.otherMessage,
                                ]}
                            >
                                {item.content && <Text style={styles.message}>{item.content}</Text>}
                                {item.sticker !== null && (
                                    <Image
                                        source={stickerImages[item.sticker]}
                                        style={{ width: 120, height: 120, resizeMode: "contain" }}
                                    />
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
            </View>
        </>
    );
};

export default FinishScreen;
