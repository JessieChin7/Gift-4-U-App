import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './ChatRoomScreen.style';

interface ChatRoomScreenProps {
    navigation: any;
}

const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({ navigation }) => {
    const [chatRooms, setChatRooms] = useState<string[]>([
        // '小明',
        '中明',
        '大明',
    ]);

    const [searchText, setSearchText] = useState('');

    const handleAddChatRoom = () => {
        setChatRooms([...chatRooms, `Chat Room ${chatRooms.length + 1}`]);
        navigation.navigate('FriendSelection');
    };

    const filteredChatRooms = chatRooms.filter((chatRoom) =>
        chatRoom.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Chat Rooms</Text> */}
            <TextInput
                style={{
                    height: 49,
                    width: 339,
                    borderColor: '#D9D9D9',
                    borderWidth: 1,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                    marginTop: 25,
                    alignSelf: 'center',
                }}
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
                placeholder="Search conversation"
            />
            <FlatList
                data={filteredChatRooms}
                style={{ alignSelf: 'center', margin: 0, padding: 0 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ddd',
                            height: 96,
                            width: 341,
                            borderRadius: 13,
                            marginTop: 25,
                            justifyContent: 'flex-start',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    // onPress={() => navigation.navigate('GameScreen')}
                    >
                        <Image source={require('../../assets/ming.png')} style={[styles.friendImage]} />
                        <Text style={[styles.friendName]}>{item}</Text>
                        <Text style={[styles.dateText]}>03 FEB</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
            />
            <Button
                mode="contained"
                onPress={handleAddChatRoom}
                style={{ backgroundColor: '#FFFFFF', alignSelf: 'center' }}
            >
                <Image source={require('../../assets/addButton.png')} style={{ width: 42, height: 42, resizeMode: 'contain' }} />
            </Button>
        </View>
    );
};

export default ChatRoomScreen;
