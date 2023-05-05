import React, { useState, useRef } from "react";
import { View, TextInput } from 'react-native';
import { Text } from "react-native-elements";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";

import Button from "../../components/Button";
import TextInputCustomed from "../../components/TextInputCustomed";
import { styles } from "./RegisterScreen.style";

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
    const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
    const textInputRef = useRef(null); // TODO: unfocus TextInput while tapping other part

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>歡迎註冊Gift for u !</Text>

      <View style={styles.inputContainer}>
        <TextInputCustomed placeholder="Username" defaultValue={username} onChangeText={setUsername} isPassword={false}/>
        <TextInputCustomed placeholder="Email" defaultValue={email} onChangeText={setEmail} isPassword={false}/>
        <TextInputCustomed placeholder="Password" defaultValue={password} onChangeText={setPassword} isPassword={true}/>
        <TextInputCustomed placeholder="Confirm password" defaultValue={passwordConfirm} onChangeText={setPasswordConfirm} isPassword={true}/>
      </View>
      
      <Button label="確認並註冊" onPress={() => {navigation.navigate('Verification')}}/>
    </View>

  );
};

export default RegisterScreen;