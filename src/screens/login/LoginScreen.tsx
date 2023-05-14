import React, { useState, useRef } from "react";
import { View } from 'react-native';
import { Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import { useAppContext } from "../../context/AppContext";

import Button from "../../components/Button";
import { styles } from "./LoginScreen.style";
import TextInputCustomed from "../../components/TextInputCustomed";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {

    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
    const textInputRef = useRef(null);

    const { username, setUsername } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>歡迎登入Gift for u !</Text>
      <View style={styles.inputContainer}>
        <TextInputCustomed placeholder="Username" defaultValue={username} onChangeText={setUsername} isPassword={false}/>
        {/* <TextInputCustomed placeholder="Email" defaultValue={email} onChangeText={setEmail} isPassword={false}/>
        <TextInputCustomed placeholder="Password" defaultValue={password} onChangeText={setPassword} isPassword={true}/> */}
      </View>

      <Button label="確認並登入" onPress={() => {navigation.navigate('Tab_Navigator')}} />
    </View>

  );
};

export default LoginScreen;