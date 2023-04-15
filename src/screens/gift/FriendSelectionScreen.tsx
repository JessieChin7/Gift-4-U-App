import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { styles } from './FriendSelectionScreen.style';

interface FriendSelectionScreenProps {
    navigation: any;
}

const FriendSelectionScreen: React.FC<FriendSelectionScreenProps> = ({ navigation }) => {
    const handleNextButton = () => {
        navigation.navigate('Game');
    };
    return (
        <View style={styles.container}>
            <Text>選擇好友</Text>
            {/* Render friend list here */}
            <Button title="下一步" onPress={handleNextButton} />
            <StatusBar style="auto" />
        </View>
    );
};

export default FriendSelectionScreen;