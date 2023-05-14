import React from "react";
import { View } from 'react-native';
import { IconType } from "react-native-dynamic-vector-icons";
import { Text, Image, Icon } from "react-native-elements";

import { styles } from "./HistoryScreen.style";

interface HistoryScreenProps {}

const HistoryScreen: React.FC<HistoryScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <View style={styles.line}/>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Image source={require('../../assets/medium-ming.png')} style={styles.image}/>
            <Icon
              name={'arrow-forward'}
              type={IconType.MaterialIcons}
              size={50}
              color={'black'}
            />
            <Image source={require('../../assets/avatar-scrat.png')} style={styles.image}/>
          </View>
        
          <View style={styles.dateContainer}>
            <View style={styles.dateLineContainer}>
              <View style={styles.dateLine}/>
            </View>
            <Text style={styles.text}>2020.09.04</Text>
          </View>

          <Image source={require('../../assets/products/hanger.png')} style={styles.productImg}/>
          <Text style={styles.productText}>中明 送你一個 木頭娃娃掛架</Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryScreen;