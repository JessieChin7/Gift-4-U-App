import React from "react";
import { TouchableOpacity } from "react-native";

import { Image } from "react-native-elements";
import { styles } from "./Header.styles";

export const HeaderTitle = (props: any) => {
    return (
        <Image source={require('../assets/app-icon.png')}  style={styles.appIcon} />
    );
}

interface AvatarButtonProps {}

export const AvatarButton = ({}: AvatarButtonProps) => {
    return (
        <TouchableOpacity style={styles.avatar}>
            <Image source={require('../assets/default-avatar.png')}  style={styles.avatar}/>
        </TouchableOpacity>
    );
}