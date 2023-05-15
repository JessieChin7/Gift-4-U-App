import React, { useState } from "react";
import { Text } from "react-native-elements";
import { View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./SearchScreen.style";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { NavigatorParamList } from "../../navigation/common";
interface ResultScreenProps { }
const SearchScreen: React.FC<ResultScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    if (searchTerm === '') {
      Alert.alert('請輸入搜尋內容');
      return;
    }
    navigation.navigate('Result');
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <TextInput
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            onSubmitEditing={handleSearch}
            placeholder={'例：喜歡打籃球、backpink、大一男生'}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Image source={require('../../assets/search.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          使用方式說明：{'\n'}
          試著輸入完整的句子{'\n'}
          例如：送給喜歡打籃球、blackpink, 的大一男生
        </Text>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};


export default SearchScreen;