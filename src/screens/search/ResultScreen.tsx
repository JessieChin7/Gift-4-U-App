import React from "react";
import { View, ScrollView } from 'react-native';
import { Text } from "react-native-elements";
import CardSearchProduct from "./CardSearchProduct";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";
import { styles } from "./ResultScreen.style";

interface ResultScreenProps { }

const ResultScreen: React.FC<ResultScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>BlackPink</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    <CardSearchProduct />
                    <CardSearchProduct />
                </ScrollView>
            </View>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>巧克力</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    <CardSearchProduct />
                    <CardSearchProduct />
                </ScrollView>
            </View>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>文創小物</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    <CardSearchProduct />
                    <CardSearchProduct />
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default ResultScreen;