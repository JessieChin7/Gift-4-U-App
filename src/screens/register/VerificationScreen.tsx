import React from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import Button from "../../components/Button";
import { styles } from "./VerificationScreen.style";

interface VerificationScreenProps {}

const VerificationScreen: React.FC<VerificationScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();

    return (
      <View style={styles.container}>
        <Text style={styles.text}>為了確保是你本人，我們將會寄送一封認證簡訊到你的email。</Text>
        
        <Button label="未收到？再寄一次" onPress={() => {navigation.navigate('Success')}} />
      </View>

    );
};

export default VerificationScreen;