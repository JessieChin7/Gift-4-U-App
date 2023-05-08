import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Image
} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './FinishScreen.style';

interface FinishScreenProps {
    navigation: any;
}

interface Message {
    id: number;
    content: string;
    sender: 'self' | 'other';
}

const FinishScreen: React.FC<FinishScreenProps> = ({ navigation }) => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, content: '你收到來自海獺的收禮邀約！', sender: 'self' },
        { id: 1, content: '點擊此訊息查看', sender: 'self' },
        { id: 2, content: '我猜你是小王', sender: 'other' },
    ]);
    const [inputText, setInputText] = useState('');

    const handleBackButton = () => {
        navigation.navigate('StickerScreen');
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length, content: inputText, sender: 'self' }]);
            setInputText('');
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={[styles.header, styles.separator]}>
                    <Button onPress={handleBackButton} style={styles.backButton}>
                        <Text style={{ color: '#000000', fontSize: 24 }}>{'<'}</Text>
                    </Button>
                    <Image
                        source={require('../../assets/ming.png')}
                        style={styles.friendAvatar}
                    />
                    <Text style={styles.friendName}>小明</Text>
                </View>

                <FlatList
                    data={messages}
                    renderItem={({ item }) => (
                        <View
                            style={[
                                styles.messageContainer,
                                item.sender === 'self' ? styles.selfMessage : styles.otherMessage,
                            ]}
                        >
                            <Text style={styles.message}>{item.content}</Text>
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
