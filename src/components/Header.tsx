import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Image } from "react-native-elements";

import { styles } from "./Header.style";
import { NavigatorParamList } from "../navigation/common";

export const HeaderTitle = (props: any) => {
    return (
        <Image source={require('../assets/icon-giftapp.png')}  style={styles.appIcon} />
    );
}

interface AvatarButtonProps {
    navigation: any;
}

export const AvatarButton: React.FC<AvatarButtonProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
    return (
        <TouchableOpacity style={styles.avatar} onPress={() =>
            navigation.navigate('Profile')
          }>
            <Image source={require('../assets/avatar-default.png')}  style={styles.avatar}/>
        </TouchableOpacity>
    );
}

export const BackButton = (props: any) => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
    return (
        <Image source={require('../assets/icon-back-arrow.png')}  style={styles.backIcon} onPress={() =>
            navigation.goBack()
        }/>
    );
}
