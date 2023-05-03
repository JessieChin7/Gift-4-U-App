import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from "react-native";
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox';
import ModalDropdown from 'react-native-modal-dropdown';
import { useForm, Controller } from 'react-hook-form';
import { styles } from './FriendSelectionScreen.style';

const images = require('../../assets/ming.png');
interface FriendSelectionScreenProps {
    navigation: any;
}

interface FriendOption {
    label: string;
    value: string;
    image: any;
}


const FriendSelectionScreen: React.FC<FriendSelectionScreenProps> = ({ navigation }) => {
    const [selectedFriend, setSelectedFriend] = useState<FriendOption | null>(null);
    const [friends, setFriend] = useState<FriendOption[]>([
        { label: "ming", value: "ming", image: images },
        { label: "mei", value: "mei", image: images },
        { label: "perry", value: "perry", image: images },
    ]);
    // const [isAnonymous, setIsAnonymous] = useState('anonymous');
    const [isAnonymousSelected, setIsAnonymousSelected] = useState(false);
    const [isRealSelected, setIsRealSelected] = useState(false);
    const handleNextButton = () => {
        navigation.navigate('Game');
    };
    const { handleSubmit, control } = useForm();

    const renderDropdownRow = (rowData: FriendOption, rowID: string, highlighted: boolean) => {
        return (
            <View style={styles.dropdownItem}>
                <Image source={rowData.image} style={styles.friendImage} />
                <Text style={styles.dropdownItemTitle}>
                    {rowData.label}
                </Text>
            </View>
        );
    };

    const onDropdownSelect = (index: string, value: FriendOption) => {
        setSelectedFriend(value);
        return true;
    };

    return (
        <View style={[styles.container, { marginTop: -50 }]}>
            <Text style={styles.title}>想送給</Text>
            <View style={styles.friendContainer}>
                <Controller
                    name="friend"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <ModalDropdown
                            options={friends}
                            renderRow={renderDropdownRow}
                            onSelect={onDropdownSelect}
                            style={{ position: 'relative', left: 67, top: 21 }}
                            dropdownStyle={styles.dropdown}
                        ><Text>選擇好友</Text></ModalDropdown>
                    )}
                />
            </View>
            <View style={[styles.radioGroup]}>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        style={styles.radioButton}
                        value={isAnonymousSelected}
                        onValueChange={setIsAnonymousSelected}
                        color={isAnonymousSelected ? '#898989' : undefined}
                    />
                    <Text>匿名</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        style={styles.radioButton}
                        value={isRealSelected}
                        onValueChange={setIsRealSelected}
                        color={isRealSelected ? '#898989' : undefined}
                    />
                    <Text>真名（開發中）</Text>
                </View>
            </View>
            <Button onPress={handleNextButton} style={styles.nextButton}>
                <Text style={{ color: '#000000' }}>下一步</Text>
            </Button>
            <StatusBar style="auto" />
        </View >
    );
};

export default FriendSelectionScreen;
