import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Animated,
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
        { label: "小明", value: "小明", image: images },
        { label: "中明", value: "中明", image: images },
        { label: "大明", value: "大明", image: images },
    ]);
    // const [isAnonymous, setIsAnonymous] = useState('anonymous');
    const [isAnonymousSelected, setIsAnonymousSelected] = useState(false);
    const [isRealSelected, setIsRealSelected] = useState(false);
    const handleNextButton = () => {
        navigation.navigate('GameScreen');
    };
    const { handleSubmit, control } = useForm();
    const [arrowRotation, setArrowRotation] = useState(new Animated.Value(0));
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleArrowRotation = () => {
        setIsDropdownOpen(!isDropdownOpen);
        Animated.timing(arrowRotation, {
            toValue: isDropdownOpen ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };
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
        <View style={[styles.container]}>
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
                            style={{ position: 'relative', left: 67, top: 4, backgroundColor: 'transparent' }}
                            dropdownStyle={styles.dropdown}
                            onDropdownWillShow={toggleArrowRotation}
                            onDropdownWillHide={toggleArrowRotation}
                        >
                            <View style={{ display: 'flex', flexDirection: 'row', width: 180, left: -50, top: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                {selectedFriend ? (
                                    <>
                                        <Image source={selectedFriend.image} style={[styles.friendImage, { left: 6, bottom: 2 }]} />
                                        <Text style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: 14,
                                            textAlign: 'center',
                                            right: 10,
                                        }}>{selectedFriend.label}</Text>
                                    </>
                                ) : (
                                    <>
                                        <Image source={require('../../assets/group.png')} />
                                        <Text>選擇好友</Text>
                                    </>
                                )}<Animated.Image
                                    source={require('../../assets/arrow.png')}
                                    style={{
                                        transform: [
                                            {
                                                rotate: arrowRotation.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: ['0deg', '180deg'],
                                                }),
                                            },
                                        ],
                                    }}
                                />
                            </View>
                        </ModalDropdown>
                    )}
                />
            </View>
            <View style={[styles.radioGroup]}>
                <View style={{ flexDirection: 'row', }}>
                    <Checkbox
                        style={styles.radioButton}
                        value={isAnonymousSelected}
                        onValueChange={setIsAnonymousSelected}
                        color={isAnonymousSelected ? '#898989' : undefined}
                    />
                    <Text style={{ marginHorizontal: 32 }}>匿名</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        style={styles.radioButton}
                        value={isRealSelected}
                        onValueChange={setIsRealSelected}
                        color={isRealSelected ? '#898989' : undefined}
                        disabled={true}
                    />
                    <Text style={{ marginHorizontal: 32 }}>真名（開發中）</Text>
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
