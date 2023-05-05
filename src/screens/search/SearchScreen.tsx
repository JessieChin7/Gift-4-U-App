import React, { useState } from "react";
import { Text } from "react-native-elements";
import { View, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./SearchScreen.style";

interface SearchScreenProps { }

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    console.log("search term：", searchTerm);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          onSubmitEditing={handleSearch}
          placeholder={'例：喜歡打籃球、backpink、大一男生'}
          style={styles.input}
        />
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