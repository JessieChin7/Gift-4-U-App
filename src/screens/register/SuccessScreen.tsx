import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import { styles } from "./SuccessScreen.style";
import Button from "../../components/Button";

interface SuccessScreenProps {}

const SuccessScreen: React.FC<SuccessScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>註冊成功！！歡迎你！</Text>
        <Button label="返回登入畫面" onPress={() => {navigation.navigate('Login_Home')}}/>
      </View>
    );
};

export default SuccessScreen;