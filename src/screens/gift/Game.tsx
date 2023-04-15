import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Game.style';

interface Item {
    id: number;
    title: string;
}

const Game: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const items: Item[] = [
        { id: 1, title: '價格命運抽抽抽' },
        { id: 2, title: '收禮方式抽抽抽' },
        { id: 3, title: '包裝方式抽抽抽' },
        { id: 4, title: '送禮者線索數量' },
    ];

    const toggleChecked = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {items.map((item) => (
                    <CheckBox
                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxTitle}
                        key={item.id}
                        title={item.title}
                        checked={checkedItems.includes(item.id)}
                        onPress={() => toggleChecked(item.id)}
                    />
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
};

export default Game;