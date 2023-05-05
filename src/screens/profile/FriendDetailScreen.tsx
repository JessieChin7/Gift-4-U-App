import React from "react";
import { TouchableOpacity, View } from 'react-native';
import { Text, Image } from "react-native-elements";
import SelectDropdown from 'react-native-select-dropdown'
import Icon, { IconType } from "react-native-dynamic-vector-icons";

import { styles } from "./FriendDetailScreen.style";

interface FriendDetailScreenProps {}

const FriendDetailScreen: React.FC<FriendDetailScreenProps> = () => {
  const names = ["Egypt", "Canada", "Australia", "Ireland"]
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/avatar-anna.png')}  style={styles.avatar} />
      <Text style={styles.textName}>Anna</Text>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>關於我：</Text>
        <Text style={styles.textContent}>興趣：</Text>
        <Text style={styles.textContent}>留言：我超愛泰迪熊的，送我泰迪熊</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.textTitle}>生日：</Text>
          <Text style={styles.textContentRow}>2002.06.14 (雙子座)</Text>
        </View>
      </View>

      {/* <View style={styles.textContainer}>
        <Text style={styles.textTitle}>彼此的紀念日：</Text>
        <View style={styles.dropdownsContainer}>
          <SelectDropdown
            data={names}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.textStyle}
            dropdownStyle={styles.dropdownStyle}
            dropdownOverlayColor="transparent"
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.textStyle}
            defaultValue={countries[0]}
          />

          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonStyle={styles.buttonDateStyle}
            buttonTextStyle={styles.textStyle}
            dropdownStyle={styles.dropdownStyle}
            dropdownOverlayColor="transparent"
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.textStyle}
            defaultValue={countries[0]}
          />
        </View>
      </View>

      <TouchableOpacity>
        <Icon
          name="plus"
          type={IconType.AntDesign}
          size={26}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity> */}

    </View>
  );
};

export default FriendDetailScreen;